'use strict';

const { Router } = require('express');
const router = Router();

//require in items from the controller (see router below)
const { renderCreateAllergyForm, postAllergy } = require('../controllers/allergyCtrl');


router.post('/allergies', postAllergy);
router.get('/allergies/create', renderCreateAllergyForm);

module.exports = router;