'use strict';
const { users } = require('./data/users');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', users, {});
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
    }
};
