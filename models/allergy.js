'use strict';
module.exports = (sequelize, DataTypes) => {
  var allergy = sequelize.define('allergy', {
    drug_name: DataTypes.STRING,
    patient_id: DataTypes.INTEGER
  }, { timestamps: false, paranoid: true, raw: true });
  allergy.associate = (models) => {
    allergy.belongsTo(models.user, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };
  return allergy;
};