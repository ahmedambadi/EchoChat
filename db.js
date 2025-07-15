require('dotenv').config;
const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "echochat",
    password: "Augestus!",
    port: "5432",
});

pool.connect((err, client, release) => {
    if (err){
        console.log("failed to connect", err.stack);
    }

    else{ 
        console.log("connected to database");
    }
    release();


});

module.exports = pool;