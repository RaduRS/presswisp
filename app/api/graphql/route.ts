"use server";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { typeDefs } from "./schema";
import resolvers from "./resolvers";
import connectToDatabase from "@/lib/database/mongodb";

// Ensure MongoDB is connected once
(async () => {
  try {
    await connectToDatabase();
    console.log("✅ MongoDB connected successfully for Apollo Server");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to initialize MongoDB connection");
  }
})();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest ) => {
    try {
      // Optionally add more context values (e.g., user data, authentication)
      return {
        headers: req.headers,
      };
    } catch (error) {
      console.error("Error creating context:", error);
      throw new Error("Failed to create GraphQL context");
    }
  },
});

// Export GET and POST handlers for Next.js
export const GET = handler;
export const POST = handler;
