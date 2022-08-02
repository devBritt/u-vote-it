// dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;

// initialize server
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any request not found
app.get((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT} 🚀`);
});
