module.exports = function (sequelize, DataTypes) {
    var ProductType = sequelize.define("ProductType", {
        productTypeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        typeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    ProductType.associate = function (models) {
        ProductType.hasMany(models.Product, {
            foreignKey: "productID",
            allowNull: false
        });
    };

    return ProductType;
};