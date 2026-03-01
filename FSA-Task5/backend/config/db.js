const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Alien@0829",
    database: "payment_simulator"
});

module.exports = pool;
