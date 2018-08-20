const models = require("../../../models");

module.exports = {
  getBurgers: function (req, res) {
    console.log("test")
    models.User.findOne({
      where: {
        id: req.params.id
      }, include: [models.Burger]

    }).then(function (results) {
      return res.json(results)
    })
  },
  // API ONLY
  getAll: function (req, res) {
    models.User.findAll({}).then(function (results) {
      return res.json(results)
    })
  },
  findOne: function (req, res) {
    models.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      return res.json(results)
    })
  },
  post: function (req, res) {
    models.User.create({
      name: req.body.name
    }).then(function (results) {
      return res.json(results)
    })
  },
}

