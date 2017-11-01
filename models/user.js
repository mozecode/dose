'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  }, { timestamps: false, paranoid: true, raw:true});
  user.associate = (models) => {
    user.hasMany(models.allergy, {
      foreignKey: 'patient_id'
    });
    user.hasMany(models.prescription, {
      foreignKey: 'patient_id'
    });
  };
  return user;
};