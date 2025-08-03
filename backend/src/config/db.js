import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    mongoose.connection.on("error", () => {
      console.log("Error to connecting mongodb database");
    });

    const connectionInstance = await mongoose.connect(ENV.MONGO_URI, {
      dbName: ENV.MONGO_DB_NAME,
    });
    console.log("MONGODB CONNECTION !! HOST => ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};
