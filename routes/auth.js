var authController = require('../controllers/authcontroller.js');

module.exports = function (app) {

    app.get('/farmer_login', authController.signup);

}