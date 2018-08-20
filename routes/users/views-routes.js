var usersController = require('../../controllers/users/views/users')

module.exports = function (app) {

  app.get("/users/:id", usersController.show)

};
