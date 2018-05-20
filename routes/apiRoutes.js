var db = require("../models");

module.exports = function (app) {
    app.get("/api/prod_search", function (req, res) {
        console.log(req.body);

        db.ProductType.findAll({
            include: [db.Product]
            //  req.body.prod_type;
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });

        res.json({});
    });

    //get a farm by id
    app.get("/api/farms/:id", function (req, res) {
        db.Farmer.findOne({
            where: {
                farmID: req.params.id
            },
            include: [db.Product]
        }).then(function (dbFarmer) {
            res.json(dbFarmer);
        });
    });

    //get a product by id
    app.get("/api/products/:id", function (req, res) {
        db.Product.findOne({
            where: {
                productID: req.params.id
            },
            include: [db.Farmer]
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    //get a type by id
    app.get("/api/productTypes/:id", function (req, res) {
        db.ProductType.findOne({
            where: {
                typeID: req.params.id
            },
            include: [db.Product]
        }).then(function (dbProductType) {
            res.json(dbProductType);
        });
    });

    //post a new farm
    app.post("/api/farms", function (req, res) {
        db.Farmer.create(req.body).then(function (dbFarmer) {
            res.json(dbFarmer);
        });
    });

    //post new product
    app.post("/api/products", function (req, res) {
        db.Product.create(req.body).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    //post new type
    app.post("/api/productTypes", function (req, res) {
        db.ProductType.create(req.body).then(function (dbProductType) {
            res.json(dbProductType);
        });
    });




};