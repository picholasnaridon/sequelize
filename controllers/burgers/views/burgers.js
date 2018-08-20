const models = require("../../../models");

module.exports = {
  index: function (req, res) {
    console.log(req.body)
    models.Burger.findAll({ include: [models.User] }).then(function (results) {
      res.render("burgers/index", { burgers: results });
    })
  },
  show: function (req, res) {
    models.Burger.findOne({
      where: {
        id: req.params.id
      }, include: [models.User]
    }).then(function (results) {
      res.render("burgers/show", { burger: results });
    })
  }
};
