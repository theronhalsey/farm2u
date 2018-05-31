var path = require("path");
module.exports = function (app) {

    app.get('/', function (req, res) {
        console.log("sending home file");
        res.render("index");
    });
    app.get('/customer', function (req, res) {
        console.log("sending customer file");
        res.render("customer");
    });
    app.get('/farmer', function (req, res) {
        console.log("sending farmer file");
        res.render("farmer");
    });
    app.get('/farmer_login', function (req, res) {
        console.log("sending farmer login file");
        res.render("farmer_login");
    });
};