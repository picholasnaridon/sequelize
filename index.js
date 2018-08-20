
var express = require("express");
var bodyParser = require("body-parser");
var db = require('./models');
var path = require('path')
var sequelize = require('sequelize')
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, '/public')));


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//burgers
require("./routes/burgers/api-routes")(app);
require("./routes/burgers/views-routes")(app);
//users
require("./routes/users/api-routes")(app);
require("./routes/users/views-routes")(app);

//users
require("./routes/userBurgers/api-routes")(app);
require("./routes/userBurgers/views-routes")(app);

app.set('view engine', 'handlebars');
app.set('views', './views');


db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
})


