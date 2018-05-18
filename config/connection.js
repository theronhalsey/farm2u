const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "MySqueekWll2018!",
    database: "farm2u_db",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId)
});