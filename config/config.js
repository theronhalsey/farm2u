require('dotenv').config();

module.exports = {
    development: {
        username: process.env.LOCAL_USERNAME,
        password: process.env.LOCAL_PASSWORD,
        database: process.env.LOCAL_DATABASE,
        host: process.env.LOCAL_HOSTNAME,
        dialect: process.env.LOCAL_DIALECT
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    },
    production: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE,
        host: process.env.RDS_HOSTNAME,
        dialect: process.env.RDS_DIALECT
    }
};