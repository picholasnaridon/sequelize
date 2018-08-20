var userBurgersController = require('../../controllers/userBurger/views/userBurger')

module.exports = function (app) {

  app.get("/users/:id/burgers", userBurgersController.show)

};
