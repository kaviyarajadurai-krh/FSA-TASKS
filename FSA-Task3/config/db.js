const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Alien@0829",     // change if your mysql password different
    database: "login_system"
});

db.connect(err => {
    if(err){
        console.log("Database Error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = db;
