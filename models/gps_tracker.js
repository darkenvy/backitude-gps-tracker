'use strict';
module.exports = function(sequelize, DataTypes) {
  var gps_tracker = sequelize.define('gps_tracker', {
    device: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT,
    altitude: DataTypes.FLOAT,
    speed: DataTypes.FLOAT,
    accuracy: DataTypes.FLOAT,
    offset: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gps_tracker;
};