var Sequelize = require('sequelize')


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: { type: Sequelize.TEXT, allowNull: false },
  });

  User.associate = function (models) {
    models.User.hasMany(models.Burger);
  };

  return User;
};



