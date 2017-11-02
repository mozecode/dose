'use strict';

const { Router } = require('express');
const router = Router();

//require in items from the controller (see router below)
const { getAllUserScripts, renderCreateScriptForm } = require('../controllers/prescriptionCtrl');

router.get('/prescriptions/user/:id', getAllUserScripts);
// router.get('/prescription/:id', getScriptDetails);
// router.post('/prescriptions', postScript);
router.get('/prescriptions/create', renderCreateScriptForm);
// router.put('/prescription/:id', updateScript);


module.exports= router;