'use strict';
module.exports = (sequelize, DataTypes) => {
  var prescription = sequelize.define('prescription', {
    script_name: DataTypes.STRING,
    dose: DataTypes.INTEGER,
    frequency1: DataTypes.STRING,
    frequency2: DataTypes.STRING,
    frequency3: DataTypes.STRING,
    frequency4: DataTypes.STRING,
    frequency5: DataTypes.STRING,
    frequency6: DataTypes.STRING,
    exp_date: DataTypes.DATE,
    date_entered: DataTypes.DATE,
    total_in_bottle: DataTypes.INTEGER,
    patient_id: DataTypes.INTEGER,
    doctor_name: DataTypes.STRING,
    pharmacy_name: DataTypes.STRING,
    pharmacy_phone: DataTypes.STRING
  }, { timestamps: false, paranoid: true, raw: true});
  prescription.associate =(models)=>{
    prescription.belongsTo(models.user, {
      foreignKey:'id',
      onDelete: 'CASCADE'
    });
  };
  return prescription;
};