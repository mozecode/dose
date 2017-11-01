'use strict';
//this code comes from example boilerplate provided by Joe Shepherd
//https://github.com/nashville-software-school/nodejs-bangazon-site-boilerplate
//click events on buttons for login and register
document.getElementById("showLogin").addEventListener('click', () => {
  location.href = `${location.origin}/login`;
});

document.getElementById("showRegister").addEventListener('click', () => {
  location.href = `${location.origin}/register`;
});