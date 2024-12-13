import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, index: true },
});

ArticleSchema.index({ body: "text" });

const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);
export default Article;
