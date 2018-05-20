'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

module.exports = function (sequelize, DataTypes) {
    var productType = sequelize.define("productType", {
        productTypeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    productType.associate = function (models) {
        productType.belongsTo(models.Farmer, {
            foreignKey: {
                allowNull: false
            }
        });
        productType.hasMany(models.Product, {
        });
    };

    return productType;
};