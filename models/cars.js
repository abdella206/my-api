'use strict';
module.exports = (sequelize, DataTypes) => {
  const cars = sequelize.define('cars', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  cars.associate = function(models) {
    // associations can be defined here
  };
  return cars;
};