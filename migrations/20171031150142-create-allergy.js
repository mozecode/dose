'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('allergies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drug_name: {
        type: Sequelize.STRING
      },
      patient_id: {//for foreign keys, set up reference to model
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          // Note the plural. 
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('allergies');
  }
};