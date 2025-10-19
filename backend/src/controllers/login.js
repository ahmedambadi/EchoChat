import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async(req, res) => {
    try {
        const { name, rawPassword } = req.body;
        if (!name || !rawPassword) {
            return res.status(400).json({ message: "name and password required" });
        }

        const user = await User.findOne({ name }).exec();
        if (!user) {
            return res.status(400).json({ message: "user not found" });
        }

        const passMatch = await bcrypt.compare(rawPassword, user.password);
        if (!passMatch) {
            return res.status(400).json({ message: "wrong password" });
        } else {
            
            const secret = "abc";
            const token = jwt.sign(
                { id: user._id.toString(), name: user.name },
                secret,
                { expiresIn: "1h" }
            );

            const userSafe = user.toObject();
            delete userSafe.password;

            return res.status(200).json({ message: "login successful", token, data: userSafe });
        }
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
};

export default login;