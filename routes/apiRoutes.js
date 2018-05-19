var Farmer = require("../models/farmers.js");
var Index = require("../models/index.js");
var Products = require("../models/products.js");
var ProductType = require("../models/productTypes.js");

var path = require("path");

module.exports = function (app) {
    app.post("/api/prod_search", function (req, res) {
        console.log(req.body);
        res.json({});
    })
};