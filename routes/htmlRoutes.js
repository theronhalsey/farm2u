//var farmController = require("./controllers/farm2u_controller.js");
var express = require("express");

var path = require("path");
var router = express.Router();

router.get( '/', function(req, res) {
    res.render('index' );
});


module.exports = router;

