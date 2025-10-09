import mongoose from 'mongoose';
const mongoDB = "mongodb://localhost:27017/";
const connectDB = async () => {
    try {
        await mongoose.connect(mongoDB);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
export default connectDB;
