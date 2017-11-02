'use strict';
// router.get('/prescriptions/user/:id', getAllUserScripts);
// router.get('/prescription/:id', getScriptDetails);
// router.post('/prescriptions', postScript);
// router.post('/prescriptions/create', renderCreateScriptForm)
// router.put('/prescription/:id', updateScript);
var moment = require('moment');

module.exports.renderCreateScriptForm = (req, res, next) => {
    console.log("hello from renderCreateScriptForm")
    res.render('createScript', {});
}
//organizes a user's prescriptions by time to take:
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
            // for(var i=0; i<person.prescriptions.length; i++){
            // //can I just do this in the pug?  nested for loop here and pass it in through the object?
            //     let time1 = moment(person.prescriptions[i].dataValues.frequency1, ["HH:mm:ss"]).format("h:mm A");
            //     console.log(time1);
                
            //     let time2 = moment(person.prescriptions[i].dataValues.frequency2, ["HH:mm:ss"]).format("h:mm A");
            //     console.log(time2);

            //     let time3 = moment(person.prescriptions[i].dataValues.frequency3, ["HH:mm:ss"]).format("h:mm A");
            //     console.log(time3);

            //     let time4 = moment(person.prescriptions[i].dataValues.frequency4, ["HH:mm:ss"]).format("h:mm A");
            //     console.log(time4);

            //     let time5 = moment(person.prescriptions[i].dataValues.frequency5, ["HH:mm:ss"]).format("h:mm A");
            //     console.log(time5);
            // }


            // let now = moment();//use moment to display only future doses for this day?
                //convert times from 24 hour clock to regular clock times for display to patient
            res.render('script_list', {//render list of user's scripts organized by time to take?
                person,                 //use case/switch statement in pug?
                allergy: person.allergies, //get user allergies
                prescription: person.prescriptions //get user prescriptions
            });
        })
        .catch((err) => {
            next(err);
        });
};

//posts a new prescription to the database
// module.exports.postScript=()=>{

// }


