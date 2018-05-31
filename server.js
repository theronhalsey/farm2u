// Required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var passport = require("passport");
var flash = require("connect-flash");
var session = require("express-session");
var PORT = process.env.PORT || 8086;

var app = express();
var db = require("./models");

// require('./config/passport')(passport); // pass passport for configuration
 
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// required for passport
app.use(session({ secret: 'eggfarmerchickenfarmer', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.  Include passport also.
require("./routes/htmlRoutes")(app,passport);
require("./routes/apiRoutes")(app, passport);
require('./routes/auth.js')(app,passport);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
