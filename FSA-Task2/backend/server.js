const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           
  password: 'Alien@0829',           
  database: 'student_dashboard',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL Connection Error:', err);
    return;
  }
  console.log('MySQL Connected');
});

// Get all students
app.get('/students', (req, res) => {
  let { sort, filter } = req.query;

  let sql = 'SELECT * FROM students';
  const conditions = [];

  if (filter) {
    conditions.push(`department='${filter}'`);
  }

  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ');
  }

  if (sort) {
    if (sort === 'name') sql += ' ORDER BY name';
    if (sort === 'date') sql += ' ORDER BY admission_date';
  }

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Get count per department
app.get('/count', (req, res) => {
  const sql = 'SELECT department, COUNT(*) as count FROM students GROUP BY department';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
