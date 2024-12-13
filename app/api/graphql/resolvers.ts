import Article from "@/lib/database/models/article";
import { ArticleInput } from "@/types/types";

const resolvers = {
  Query: {
    // Fetch all articles
    getArticles: async () => {
      try {
        const articles = await Article.find().sort({ date: -1 }); // Sort by most recent
        return articles;
      } catch (error: unknown) {
        throw new Error(
          `Error fetching articles: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    },
  },

  Mutation: {
    // Create a new article
    createArticle: async (_: unknown, { input }: ArticleInput) => {
      try {
        const newArticle = new Article({
          body: input.body,
        });
        const savedArticle = await newArticle.save();
        return savedArticle;
      } catch (error: unknown) {
        throw new Error(
          `Error creating article: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    },
  },
};

export default resolvers;
