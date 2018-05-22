module.exports = function (sequelize, DataTypes) {
    var Farmer = sequelize.define("Farmer", {
        farmName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        farmContact: {
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
            onDelete: "cascade"
        });
    };
    
    return Farmer;
};