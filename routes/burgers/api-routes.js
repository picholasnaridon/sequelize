var burgersController = require('../../controllers/burgers/api/burgers')

module.exports = function (app) {

  app.get("/api/burgers", burgersController.getAll)

  app.get("/api/burgers/:id", burgersController.findOne)

  app.delete("/api/burgers/:id/delete", burgersController.deleteAt)

  app.put("/api/burgers/:id/eat", burgersController.eat)

  app.post('/api/burgers', burgersController.post)

};
