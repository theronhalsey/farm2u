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
        productID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    Product.associate = function (models) {
        Product.belongsTo(models.ProductType, {
            foreignKey: "typeID",
            allowNull: false
            })
        Product.belongsTo(models.Farmer, {
            foreignKey: "farmID",
            allowNull: false
            })
    };

    return Product;
};  