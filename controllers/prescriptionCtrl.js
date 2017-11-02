'use strict';
// router.get('/prescriptions/user/:id', getAllUserScripts);
// router.get('/prescription/:id', getScriptDetails);
// router.post('/prescriptions', postScript);
// router.post('/prescriptions/create', renderCreateScriptForm)
// router.put('/prescription/:id', updateScript);
var moment = require('moment');


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
            // let now = moment();//use moment to display only future doses for this day?
            // console.log(now);
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
