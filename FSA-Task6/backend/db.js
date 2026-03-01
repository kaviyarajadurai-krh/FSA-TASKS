const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',            // your MySQL username
    password: 'Alien@0829', // your MySQL password
    database: 'company_db'
});

module.exports = pool.promise();
