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
        productType.hasMany(models.Product, {
            as: "Product",
            foreignKey: "typeID"
        });
    };

    return productType;
};