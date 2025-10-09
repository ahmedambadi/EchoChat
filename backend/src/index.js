import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/rt", userRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
connectDB();




