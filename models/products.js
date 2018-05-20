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
        }
    });

    Product.associate = function (models) {
        Product.belongsTo(models.productType, {
            foreignKey: "typeID"
            })
        Product.belongsTo(models.Farmer, {
            foreignKey: "productId"
            })
    };

    return Product;
};  