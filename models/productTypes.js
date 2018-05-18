module.exports = function (sequelize, DataTypes) {
    var productType = sequelize.define("productType", {
        farmName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    productType.associate = function (models) {
        productType.hasMany(models.Products, {
        });
    };

    return productType;
};