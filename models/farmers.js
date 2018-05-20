'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];
var db        = {};

module.exports = function (sequelize, DataTypes) {
    var Farmer = sequelize.define("Farmer", {
        farmName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        farmZip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                len: [5, 5]
            }
        }
    });
    Farmer.associate = function (models) {
        Farmer.hasMany(models.Product, {
            as: "Product",
            foreignKey: "farmID"
        });
    };

    return Farmer;
};