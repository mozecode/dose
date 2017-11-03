'use strict';

const { Router } = require('express');
const router = Router();

const { getUserDetails } = require('../controllers/userCtrl');

router.get('/user/:id', getUserDetails); //renders user_detail.pug (my account page)

// router.put('/user/:id', updateUser);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
module.exports = router;