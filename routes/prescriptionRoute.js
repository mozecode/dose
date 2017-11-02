'use strict';

const { Router } = require('express');
const router = Router();

//require in items from the controller (see router below)
const { getAllUserScripts } = require('../controllers/prescriptionCtrl');

router.get('/prescriptions/user/:id', getAllUserScripts);
// router.get('/prescription/:id', getScriptDetails);
// router.post('/prescriptions', postScript);
// router.post('/prescriptions/create', renderCreateScriptForm)
// router.put('/prescription/:id', updateScript);

module.exports= router;