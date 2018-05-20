var db = require("../models");

var path = require("path");

module.exports = function (app) {
    app.get("/api/prod_search", function (req, res) {
        console.log(req.body);

        db.productType.findAll({
            include: [db.productType]
          //  req.body.prod_type;
        }).then(function (dbprodType) {
            res.json(dbprodType);
        });

        res.json({});
    })
};