require('dotenv').config();

module.exports = {
    development: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE,
        host: process.env.RDS_HOSTNAME,
        dialect: process.env.RDS_DIALECT
    },
    test: {
        username: process.env.LOCAL_USERNAME,
        password: process.env.LOCAL_PASSWORD,
        database: process.env.LOCAL_DATABASE,
        host: process.env.LOCAL_HOST,
        dialect: process.env.LOCAL_DIALECT
    },
    production: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE,
        host: process.env.RDS_HOSTNAME,
        dialect: process.env.RDS_DIALECT
    }
};