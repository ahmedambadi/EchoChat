import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
connectDB();
