module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        productAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        productTypeID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        farmID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Farmer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Product.associate = function (models) {
        Product.belongsTo(models.productType, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Product;
};  