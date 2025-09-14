const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const pool = require("./db.js");
const userroute = require("./routes/userRoutes.js");
app.use('/userapi', userroute);
app.get('/ping', (req, res) => res.send('pong'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
const cars = 2;