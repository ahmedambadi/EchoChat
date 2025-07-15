const user = require("../models/usersModel");

exports.CreateUser = async (req, res) => {
    try {
        const { userid, username, userpassword } = req.body; // fixed

        const newuser = await user.createuser({ userid, username, userpassword }); // fixed method name
        res.status(201).json(newuser);
    }
    catch(err){
        res.status(500).json('internal server error'); // fixed
        console.error(err); // fixed
    }
};