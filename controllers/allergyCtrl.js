'use strict';

//renderCreateAllergyForm
module.exports.renderCreateAllergyForm = (req, res, next)=>{
    res.render('createAllergy', {});
};

//postAllergy
module.exports.postAllergy = (req, res, next) => {
    const { allergy } = req.app.get('models');
    var flash = req.flash()
    allergy.create({
        drug_name: req.body.drug_name,
        patient_id:req.session.passport.user.id,
        createdAt: null,
        updatedAt: null
    })
    .then((result) => {
        res.render('createAllergy', {messages:'Successfully Added.  Would you like to add another?'});
    })
    .catch((err) => {
        res.status(500).json(err)
    });
    //success message and redirect back until user clicks on back to main menu
};