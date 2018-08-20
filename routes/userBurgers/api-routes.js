var userBurgersController = require('../../controllers/userBurger/api/userBurger')

module.exports = function (app) {

  app.get("/api/users/:id/burgers", userBurgersController.findOne)
  app.post("/api/user/burger", userBurgersController.createUserBurger)

};
