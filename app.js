const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const pool = require("./db.js");
const userroute = require("./routes/userRoutes.js");
app.use('/api', userroute);

module.exports = app;