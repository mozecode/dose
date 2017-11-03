'use strict';

const { Router } = require('express');
const router = Router();

//require in items from the controller (see router below)
const { renderCreateAllergyForm, postAllergy } = require('../controllers/allergyCtrl');


router.post('/allergies', postAllergy);
router.get('/allergies/create', renderCreateAllergyForm);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
module.exports = router;