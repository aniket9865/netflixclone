import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(ENV_VARS.MONGO_URL)
       console.log("MongoDB connected successfully", conn.connection.host);
    } catch (error) {
        console.error("MongoDB connection failed", error);
        process.exit(1);
    }
}