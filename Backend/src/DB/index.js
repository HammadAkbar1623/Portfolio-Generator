import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log(`\n MongoDB connected at ${connectionInstance.connection.host}`);
        
    } 
    catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB