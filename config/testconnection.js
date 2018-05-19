/* require("dotenv").config(); */

const mysql = require('mysql');
/* const DB_HOST = process.env.RDS_HOSTNAME;
const DB_USER = process.env.RDS_USERNAME;
const DB_PASSWORD = process.env.RDS_PASSWORD;
const DB_PORT = process.env.RDS_PORT; */


const connection = mysql.createConnection({
    host: "farm2u-db.crz32kjpg82l.us-east-2.rds.amazonaws.com",
    user: "theron",
    password: " ",
    port: 3006
});

connection.connect( function (err) {
    
    if (err) {
        console.error("database connection failed: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

/* -- Connection Id: 593
-- User: theron
-- Host: 50-204-166-194-static.hfc.comcastbusiness.net
-- DB: farm2u_db
-- Command: Sleep
-- Time: 163
-- State: None
 */