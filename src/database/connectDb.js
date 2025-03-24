import mongoose from "mongoose";
import { seeder } from "./seed/seeder.js";

const connectDb = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("database connected...");
        await seeder();
    } catch (err) {
        console.log(err);
    }
};

export default connectDb;