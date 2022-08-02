// dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');

// initialize server
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'pa55w0rd',
        database: 'election'
    },
    console.log('Connected to the election database 🖥️')
);

// GET all candidates
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = ?`, 1, (err, row) => {
    if (err) {
        console.log(err);
    }
    console.log(row);
});

// DELETE a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];
// POST new candidate
db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// default response for any request not found
app.get((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT} 🚀`);
});
