const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "a.$heikh2020",
    database: "EmployeeTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the askTask function after the connection is made to prompt the user
    console.log("Successfully connected to the database.")
});

module.exports = connection;