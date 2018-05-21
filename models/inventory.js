module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        role: DataTypes.STRING
    })

    return Inventory
};