'use strict';

const { Router } = require('express');
const router = Router();

//require in items from the controller (see router below)
const { getAllUserScripts, renderCreateScriptForm, postScript, getScripts, getScriptDetails, updateScript, deleteScript } = require('../controllers/prescriptionCtrl');

router.get('/prescriptions/user/:id', isLoggedIn, getAllUserScripts);
router.get('/prescriptions/update', isLoggedIn, getScripts);
router.get('/prescription/:id', isLoggedIn, getScriptDetails);
router.post('/prescriptions', isLoggedIn, postScript);
router.get('/prescriptions/create', isLoggedIn, renderCreateScriptForm);
router.put('/prescription/:id', isLoggedIn, updateScript);
router.delete('/prescription/:id', isLoggedIn, deleteScript);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
module.exports= router;