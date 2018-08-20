var burgersController = require('../../controllers/burgers/views/burgers')

module.exports = function (app) {
  app.get("/", burgersController.index)

  app.get("/burgers/:id", burgersController.show)
};
