var Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: { type: Sequelize.TEXT, allowNull: false },
    devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
  });
  return Burger;
};


