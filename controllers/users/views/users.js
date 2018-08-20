const models = require("../../../models");

module.exports = {
  show: function (req, res) {
    console.log("test")
    models.User.findOne({
      where: {
        id: req.params.id
      }

    }).then(function (results) {
      res.render("users/show", { user: results })
    })
  },
}