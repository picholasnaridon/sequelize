const models = require("../../../models");

module.exports = {
  show: function (req, res) {
    models.User.findOne({
      where: {
        id: req.params.id
      }, include: [models.Burger]

    }).then(function (results) {
      res.render("userBurger/show", { user: results })
    })
  },
}