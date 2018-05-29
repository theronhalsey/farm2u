var bcrypt = require('bcrypt-nodejs');

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
        },
        farmEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        farmPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        last_login: {
            type: DataTypes.DATE
        },

        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });
    Farmer.associate = function (models) {
        Farmer.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };


    // create the model for users and expose it to our app
    //module.exports = mongoose.model('User', userSchema);

    return Farmer;
};