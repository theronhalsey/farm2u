// Required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var PORT = process.env.PORT || 8086;

var app = express();
var db = require("./models");
 
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//app.use('/', routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
}); 

/* db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}); */