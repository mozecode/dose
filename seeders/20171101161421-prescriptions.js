'use strict';
const { prescriptions } = require('./data/prescriptions');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('prescriptions', prescriptions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('prescriptions', null, {});
  }
};