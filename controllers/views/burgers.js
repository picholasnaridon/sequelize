const models = require("../../models");

module.exports = {
  index: function (req, res) {
    console.log(req.body)
    models.Burger.findAll({}).then(function (results) {
      res.render("index", { burgers: results });
    })
  },
  show: function (req, res) {
    models.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.render("show", { burger: results });
    })
  }
};
