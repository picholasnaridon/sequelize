const models = require("../../../models");

module.exports = {
  findOne: function (req, res) {
    console.log("test")
    models.User.findOne({
      where: {
        id: req.params.id
      }, include: [models.Burger]

    }).then(function (results) {
      res.json(results)
    })
  },
  createUserBurger: function (req, res) {
    console.log(req.body.userName)
    models.User.create({
      name: req.body.userName
    }).then(function (user) {
      return models.Burger.create({
        name: req.body.burgerName,
        UserId: user.id
      });
    }).then(function (response) {
      return res.json(response)
    })
  }
}