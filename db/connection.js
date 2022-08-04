const mysql = require('mysql2');

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

module.exports = db;