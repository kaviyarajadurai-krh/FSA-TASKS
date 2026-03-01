CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    department VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL
);