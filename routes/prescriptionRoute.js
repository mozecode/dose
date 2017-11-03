'use strict';

const { Router } = require('express');
const router = Router();

//require in items from the controller (see router below)
const { getAllUserScripts, renderCreateScriptForm, postScript, getScripts, getScriptDetails, updateScript, deleteScript } = require('../controllers/prescriptionCtrl');

router.get('/prescriptions/user/:id', getAllUserScripts);
router.get('/prescriptions/update', getScripts);
router.get('/prescription/:id', getScriptDetails);
router.post('/prescriptions', postScript);
router.get('/prescriptions/create', renderCreateScriptForm);
router.put('/prescription/:id', updateScript);
router.delete('/prescription/:id', deleteScript);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
module.exports= router;