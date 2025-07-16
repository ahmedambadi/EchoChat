const db = require("../db");
const bcrypt = require("bcrypt");
exports.createuser = async ({ username, userpassword }) => {
    const hashedpassword = await bcrypt.hash(userpassword, 5); // await directly

    const query = `
        INSERT INTO users (username, userpassword)
        VALUES ($1, $2)
        RETURNING *
    `;
    const values = [username, hashedpassword]; // use hashed password
    const result = await db.query(query, values);
    return result.rows[0]; // return the created user (with generated userid)
};





