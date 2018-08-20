var usersController = require('../../controllers/users/api/users')

module.exports = function (app) {

  app.get("/api/users", usersController.getAll)
  app.get("/api/users/:id", usersController.findOne)
  app.post("/api/users", usersController.post)

};
