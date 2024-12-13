import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected = 0;

const connectToDatabase = async () => {
  if (isConnected) {
    console.log("📂 Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = 1;
    console.log("🎉 Connected to MongoDB");
    return db;
  } catch (error: unknown) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error(
      `Failed to initialize MongoDB connection: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export default connectToDatabase;
