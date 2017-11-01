'use strict';

//getUserDetails

module.exports.getUserDetails=(req, res, next)=>{
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
            res.render('user_detail', {
                person,
                allergy: person.allergies, //get user allergies
                prescription: person.prescriptions //get user prescriptions
            });
        })
        .catch((err) => {
            next(err);
        });
};

//getUserDetailsByTime?

//updateUser

