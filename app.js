'use strict';

const express = require('express');
const app= express();

const passport = require('passport');
var session = require('express-session');
var methodOverride = require('method-override'); //use method override with forms for PUT and DELETE

let bodyParser = require('body-parser');//packages up input for the database in object form
const flash = require('express-flash'); //flash alert messages
var later = require('later');//library used for timing on reminders

require('dotenv').config(); //change env file
const port = process.env.PORT || 8080;

app.use(methodOverride('_method')); //method override for use with forms
app.use(express.static(__dirname + '/public'));//give access to files in public folder (styles, jquery, images)

app.set('models', require('./models'));  //require in all models to prevent db duplication
app.set('view engine', 'pug');// pug views served up from the back end

let routes = require('./routes/');//require in routes

//middleware starts here:

//session persistence injection with express session
app.use(session({
    secret: 'feles cattus',
    resave: true,
    saveUninitialized: true
})); // session secret is hashed with the password to add extra layer of protection

//passport strategies
require('./config/passport-strat.js');
app.use(passport.initialize());
app.use(passport.session());//login session
//logged in user info will be accessible in pug templates- won't forget who user is after refresh
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