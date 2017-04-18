'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('gps_trackers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      device: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT
      },
      long: {
        type: Sequelize.FLOAT
      },
      altitude: {
        type: Sequelize.FLOAT
      },
      speed: {
        type: Sequelize.FLOAT
      },
      accuracy: {
        type: Sequelize.FLOAT
      },
      offset: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('gps_trackers');
  }
};