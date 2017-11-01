'use strict';
const { allergies } = require('./data/allergies');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('allergies', allergies, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('allergies', null, {});
  }
};
