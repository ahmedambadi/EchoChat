const db = require("../db");
exports.createuser = async ({ userid, username, userpassword }) => {
    const query = `
        INSERT INTO users (userid, username, userpassword)
        VALUES ($1, $2, $3)
        RETURNING *
    `;
    const values = [userid, username, userpassword];
    const result = await db.query(query, values);
    return result.rows[0]; // return the created user
};





