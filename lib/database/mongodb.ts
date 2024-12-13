import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log(" 🎉 Database connection successful");
      return mongoose;
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Could not connect to MongoDB");
  }
};

export default connectToDatabase;
