import User from "../models/User.js";
import bcrypt from "bcrypt";

const signup = async(req, res) => {
    try {
        const { name, rawPassword } = req.body;
        const password = await bcrypt.hash(rawPassword, 5);

        const newUser = new User({ name, password });

        await newUser.save();
        res.status(201).json({ message: "user created", data: newUser });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
};

export default signup;