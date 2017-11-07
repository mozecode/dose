'use strict';
var moment = require('moment');

module.exports.renderCreateScriptForm = (req, res, next) => {
    res.render('createScript', {});
}

//gets all of a user's prescriptions
module.exports.getAllUserScripts = (req, res, next) => {
    const { user, allergy, prescription } = req.app.get('models');
    user.findAll(
        {
            include: [{
                all: true
            }],
            where: {
                id: req.session.passport.user.id
            }
        })
        .then((oneuser) => {
            let person = oneuser[0].dataValues
            //     let time1 = moment(person.prescriptions[i].dataValues.frequency1, ["HH:mm:ss"]).format("h:mm A");
                // let now = moment();//use moment to display only future doses for this day?
            res.render('script_list', {//render list of user's scripts organized by time to take?
                person,                 //use case/switch statement in pug?
                allergy: person.allergies, //get user allergies
                prescription: person.prescriptions //get user prescriptions- need it to be an array of objects sorted by time?
            });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports.getScripts=(req, res, next)=>{   //get all scripts to render as clickable links in updateList.pug
    const {user, prescription } = req.app.get('models');
    user.findAll(
        {
            include: [{
                all: true
            }],
            where: {
                id: req.session.passport.user.id
            }
        })
        .then((oneuser) => {
            console.log("What do we get from getscripts oneuser?", oneuser)
            let person = oneuser[0].dataValues
            res.render('updateList', {
                prescription: person.prescriptions
            });
        })
        .catch((err) => {
            next(err);
        });
};

module.exports.getScriptDetails=(req, res, next)=>{
    //find prescription by id
    const { prescription } = req.app.get('models');
    prescription.findById(parseInt(req.params.id), { raw: true })
    .then((script)=>{//why does putting anything else here, even a console log break it?
        res.render('updateOneScript', {script})//sending script values to prefill the update one script pug form
    })
    .catch((err)=>{
        res.status(500).json(err);
    })
}


//posts a new prescription to the database
module.exports.postScript=(req, res, next)=>{
    const { prescription, user } = req.app.get('models');
    var regExp = /\(([^)]+)\)/;//capture all items between parentheses (idea from https://stackoverflow.com/questions/17779744/regular-expression-to-get-a-string-between-parentheses-in-javascript )
    var dates = regExp.exec(req.body.frequency);
    //split it at commas into an array & flip into values based on array length.
    let dateArray= dates[1].split(',');

    let value1 = null;
    let value2 = null;
    let value3 = null;
    let value4 = null;
    let value5 = null;
    let value6 = null;
    //default values are null unless I reassign them below.

    if (dateArray.length === 1){
        //if the array has 1 value:match the time based on whether it's morning or evening
        if(dateArray[0] =='7:00 AM'){
            value1= dateArray[0]
        }else if(dateArray[0]=='11:00 PM'){
            value6= dateArray[0];
        }
    }else if (dateArray.length === 2){
        //if the array has 2 values: assign dates value 1 and value 6 ex.  value1 = dateArray[0]
        value1= dateArray[0];
        value6= dateArray[1];
    }else if (dateArray.length === 3){
        //if the array has 3 values, assign to 1, 3, 6
        value1 = dateArray[0];
        value3 = dateArray[1];
        value6= dateArray[2];
    } else if (dateArray.length === 4){
        //if 4 values: assign to 1,3, 4, 6
        value1 = dateArray[0];
        value3 = dateArray[1];
        value4= dateArray[2];
        value6 = dateArray[3];
    }else if (dateArray.length === 6){
        //if 6 values: assign to corresponding value
        value1= dateArray[0];
        value2= dateArray[1];
        value3= dateArray[2];
        value4= dateArray[3];
        value5= dateArray[4];
        value6= dateArray[5];
    }

    //fix date format going into database
    let exp = req.body.exp_date;
    let expArr = exp.split("T");
    let expDate = expArr[0];
    //fix date entered
    let d=req.body.date_entered;
    let dateArr=d.split("T");
    let dateEntered = dateArr[0];

//do a check for all prescriptions for the user and see if the prescription is already in the db
prescription.findAll(
    { where: {
            patient_id: req.session.passport.user.id,
            script_name:req.body.script_name
        }
    })
    .then((oneScript) => {
        if(oneScript.length>0){
            console.log("sorry, that prescription already exists in the database");
            res.redirect('welcome');
        }
        if (oneScript.length==0){ //if no match, add to the db
            prescription.create({
                script_name: req.body.script_name,
                dose: req.body.dose,
                total_in_bottle: req.body.total_in_bottle,
                frequency1: value1,
                frequency2: value2,
                frequency3: value3,
                frequency4: value4,
                frequency5: value5,
                frequency6: value6,
                exp_date: expDate,
                date_entered:dateEntered,
                patient_id: req.session.passport.user.id,
                doctor_name: req.body.doctor_name,
                pharmacy_name: req.body.pharmacy_name,
                pharmacy_phone: req.body.pharmacy_phone,
                createdAt: null,
                updatedAt: null
            })
            .then((result) => {
                res.status(200).redirect('/prescriptions/user/'+req.session.passport.user.id);  //redirect to view of all user medications
            })
            .catch((err) => {
                res.status(500).json(err)
            });
        }
    });
};

//come back and look at this also:
module.exports.updateScript = (req, res, next) => {
    const { prescription } = req.app.get('models');
    prescription.update({
            script_name: req.body.script_name,  //can only update these parts of a prescription, otherwise delete & start again.
            dose: req.body.dose,
            total_in_bottle: req.body.total_in_bottle,
            doctor_name: req.body.doctor_name,
            pharmacy_name: req.body.pharmacy_name,
            pharmacy_phone: req.body.pharmacy_phone
        }, {
            where: {
                id: req.params.id //gets this id from the route
            }
        })
        .then((result)=>{
            res.render('welcome')  //instead redirect to where?
        })
        .catch((err) => {
            next(err);
        });
};

module.exports.deleteScript=(req, res, next)=>{
    const { prescription } = req.app.get('models');
    prescription.destroy({
        where: {
            id: req.params.id,
        }
    })
        .then((result) => {
            res.render('welcome');
        })
}
