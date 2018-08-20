const models = require("../../../models");

module.exports = {
  // API ONLY
  getAll: function (req, res) {
    models.Burger.findAll({}).then(function (results) {
      return res.json(results)
    })
  },
  findOne: function (req, res) {
    models.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      return res.json(results)
    })
  },
  post: function (req, res) {
    models.Burger.create({
      name: req.body.name
    }).then(function (results) {
      return res.json(results)
    })
  },
  deleteAt: function (req, res) {
    models.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      return res.json({ "Message": "Successfully Deleted" })
    })
  },
  eat: function (req, res) {
    models.Burger.update({
      devoured: 1
    }, {
        where: {
          id: req.params.id
        }
      }).then(function (results) {
        return res.json(results)
      })
  }
}; 