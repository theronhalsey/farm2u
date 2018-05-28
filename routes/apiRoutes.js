var db = require("../models");

module.exports = function (app) {
    
    //get a farm by id
    app.get("/api/farm_id/:id", function (req, res) {
        db.Farmer.findOne({
            where: {
                ID: req.params.id
            },
            include: [db.Product]
        }).then(function (dbFarmer) {
            res.json(dbFarmer);
        });
    });
    //get all farms
    app.get("/api/farms/", function (req, res) {
        db.Farmer.findAll({
            include: [db.Product]
        }).then(function (dbFarmer) {
            res.json(dbFarmer);
        });
    });

    //get a product by id
    app.get("/api/product_id/:id", function (req, res) {
        db.Product.findOne({
            where: {
                ID: req.params.id
            },
            include: [db.Farmer]
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    //get all product by name
    app.get("/api/product_name/:name", function (req, res) {
        db.Product.findAll({
            where: {
                productName: req.params.name
            },
            include: [db.Farmer]
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    //get all products
    app.get("/api/products/", function (req, res) {
        db.Product.findAll({
            include: [db.Farmer]
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    //get all products of a type
    app.get("/api/product_type/:productType", function (req, res) {
        db.Product.findAll({
            where: {
                productType: req.params.productType
            },
            include: [db.Farmer]
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    //get all products by farm
    app.get("/api/product_farm/:farmerID", function (req, res) {
        db.Product.findAll({
            where: {
                farmerID: req.params.farmerID
            },
            include: [db.Product]
        }).then(function (dbFarmer) {
            res.json(dbFarmer);
        });
    });
    
    //get all available products
    app.get("/api/product_available/", function (req, res) {
        db.Product.findAll({
            where: {
                productAvailable: 1
            },
            include: [db.Farmer]
        }).then(function (dbProduct) {
            res.json(dbProduct);
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
            console.log(req.body)
            res.json(dbProduct);
        });
    });

    // update farm
    app.put("/api/farms", function (req, res) {
        db.Farmer.update(
            req.body,
            {
              where: {
                id: req.body.id
              }
        }).then(function (dbFarmer) {
            res.json(dbFarmer);
        });
    });

    // update product
    app.put("/api/products", function (req, res) {
        db.Product.update(
            req.body,
            {
              where: {
                id: req.body.id
              }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // delete farm
    app.delete("/api/farms/:id", function(req, res) {
        db.Farmer.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbFarmer) {
          res.json(dbFarmer);
        });
      });

      // delete product
    app.delete("/api/products/:id", function(req, res) {
        db.Product.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbProduct) {
          res.json(dbProduct);
        });
      });

};