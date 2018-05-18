var express = require("express");
var path = require("path");
var router = express.Router();


    router.get( '/', function(req, res) {
        console.log("sending file");
        res.render("index");
    });
    router.get( '/customer', function(req, res) {
        console.log("sending file");
        res.render("customer");
    });
    router.get( '/farmer', function(req, res) {
        console.log("sending file");
        res.render("farmer");
    });

