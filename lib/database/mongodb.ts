import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected = 0; // Tracks the connection state

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("📂 Using existing database connection");
    return;
  }

  if (mongoose.connection.readyState === 1) {
    isConnected = 1;
    console.log("📂 Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = 1;
    console.log("🎉 Connected to MongoDB");
    return db;
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", (error as Error).message);
    throw new Error("Could not connect to MongoDB");
  }
};

export default connectToDatabase;
