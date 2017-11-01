'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prescriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      script_name: {
        type: Sequelize.STRING
      },
      dose: {
        type: Sequelize.INTEGER
      },
      frequency1: {
        type: Sequelize.STRING
      },
      frequency2: {
        type: Sequelize.STRING
      },
      frequency3: {
        type: Sequelize.STRING
      },
      frequency4: {
        type: Sequelize.STRING
      },
      frequency5: {
        type: Sequelize.STRING
      },
      frequency6: {
        type: Sequelize.STRING
      },
      exp_date: {
        type: Sequelize.DATE
      },
      date_entered: {
        type: Sequelize.DATE
      },
      total_in_bottle: {
        type: Sequelize.INTEGER
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
      doctor_name: {
        type: Sequelize.STRING
      },
      pharmacy_name: {
        type: Sequelize.STRING
      },
      pharmacy_phone: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('prescriptions');
  }
};