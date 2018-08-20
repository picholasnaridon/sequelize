var Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: { type: Sequelize.TEXT, allowNull: false },
    devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  });

  Burger.associate = function (models) {
    models.Burger.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Burger;
};


