'use strict';

const express = require('express');
const app= express();

const passport = require('passport');
var session = require('express-session');
var methodOverride = require('method-override')

let bodyParser = require('body-parser');
const flash = require('express-flash');

require('dotenv').config(); //change env file
const port = process.env.PORT || 8080;

app.use(methodOverride('_method')); //method override for use with forms
app.use(express.static(__dirname + '/public'));//give access to files in public folder (styles, jquery)

app.set('models', require('./models'));  //require in all models to prevent db duplication
app.set('view engine', 'pug');// pug is the view engine

let routes = require('./routes/');//require in routes

//middleware starts here:

//session persistence injection with express session
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret

//passport strategies
require('./config/passport-strat.js');
app.use(passport.initialize());
app.use(passport.session());//login session
//logged in user info will be accessible in pug templates
app.use( (req, res, next) => {
    res.locals.session = req.session;
    // console.log('res.locals.session', res.locals.session);
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//body parser packages info into objects
app.use(flash());

  //app.use(routes) must go after all of the above
app.use(routes);

// 404 error handler?
// Add server error handler?

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});