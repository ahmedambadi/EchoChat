const user = require("../models/usersModel");
const pool = require("../db");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
exports.CreateUser = async (req, res) => {
    try {
        const { username, userpassword } = req.body; // userid removed

        const newuser = await user.createuser({ username, userpassword });
        res.status(201).json(newuser);
    }
    catch(err){
        res.status(500).json('internal server error');
        console.error(err);
    }
};


exports.signin = async (req, res) => {
    try {
        const { username, userpassword } = req.body;
        const secretkey = "your_secret_key"; // Replace with your actual secret key

        // Fetch user by username
        const result = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );
        const foundUser = result.rows[0];

        if (!foundUser) {
            res.status(404).json({ error: "Username not found" });
            return;
        }

        // Compare hashed password
        const passwordMatch = await bcrypt.compare(userpassword, foundUser.userpassword);
        if (!passwordMatch) {
            res.status(401).json({ error: "Incorrect password" });
            return;
        }

        const token = jwt.sign({ id: foundUser.userid }, secretkey, { expiresIn: '1d' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
        console.error(err);
    }
};