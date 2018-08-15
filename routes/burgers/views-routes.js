var burgersController = require('../../controllers/views/burgers')

module.exports = function (app) {
  app.get("/", burgersController.index)

  app.get("/burgers/:id", burgersController.show)
};
