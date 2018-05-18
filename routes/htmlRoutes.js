var path = require("path");

module.exports = function(app) {
    app.get( '/', function(req, res) {
        console.log("sending file");
        res.render("index");
    });
    app.get( '/customer', function(req, res) {
        console.log("sending file");
        res.render("customer");
    });
    app.get( '/farmer', function(req, res) {
        console.log("sending file");
        res.render("farmer");
    });
};
