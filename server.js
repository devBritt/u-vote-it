// dependencies
const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

// initialize server
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api routes
app.use('/api', apiRoutes);

// default response for any request not found
app.get((req, res) => {
    res.status(404).end();
});

// start server after db connection
db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`The server is running on port ${PORT} 🚀`);
    });
})
