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

    getArticle: async (_: unknown, { path }: { path: string }) => {
      try {
        const article = await Article.findOne({ path });
        if (!article) {
          throw new Error("Article not found");
        }
        return article;
      } catch (error: unknown) {
        throw new Error(
          `Error fetching article: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      }
    },
    getHeadlineArticle: async () => {
      try {
        const article = await Article.findOne({ headline: true })
          .sort({ date: -1 })
          .exec();

        return article || null;
      } catch (error) {
        console.error("Error fetching headline article:", error);
        throw new Error("Failed to fetch the headline article.");
      }
    },
  },

  Mutation: {
    upsertArticle: async (_: unknown, { input }: ArticleInput) => {
      try {
        if (input.id) {
          // Update existing article
          const updatedArticle = await Article.findByIdAndUpdate(
            input.id,
            {
              title: input.title,
              metaTitle: input.metaTitle,
              description: input.description,
              path: input.path,
              headline: input.headline,
              readingTime: input.readingTime,
              body: input.body,
            },
            { new: true }
          );
          if (!updatedArticle) throw new Error("Article not found for update");
          return updatedArticle;
        } else {
          // Create new article
          const newArticle = new Article({
            title: input.title,
            metaTitle: input.metaTitle,
            description: input.description,
            path: input.path,
            headline: input.headline,
            body: input.body,
            readingTime: input.readingTime,
            date: new Date(),
          });
          const savedArticle = await newArticle.save();
          return savedArticle;
        }
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
