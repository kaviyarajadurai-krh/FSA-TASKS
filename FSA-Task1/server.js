const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Alien@0829",
    database:"student_registration"
});
db.connect(err=>{
    if(err) throw err;
    console.log("MySQL Connected");
});
app.post("/register",(req,res)=>{
    const {name,email,dob,department,phone}=req.body;

    const sql="INSERT INTO students(name,email,dob,department,phone) VALUES (?,?,?,?,?)";

    db.query(sql,[name,email,dob,department,phone],(err,result)=>{
        if(err) throw err;
        res.send("Student Registered Successfully");
    });
});

app.get("/students",(req,res)=>{
    db.query("SELECT * FROM students",(err,result)=>{
        if(err) throw err;
        res.json(result);
    });
});

app.listen(3000,()=>console.log("Server running at http://localhost:3000"));
