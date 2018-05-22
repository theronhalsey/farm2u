var Farmdb = require("../models");

var path = require("path");

module.exports = function (app) {
    app.get("/api/prod_search", function (req, res) {
        console.log(req.body);

        Farmdb.productType.findAll({
            //console.log(req.body.prod_type)
          //  req.body.prod_type;
        }).then(function (response) {
            res.json(response);
        });

        res.json({});
    })
};