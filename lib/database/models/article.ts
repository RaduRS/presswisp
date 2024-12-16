import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  metaTitle: { type: String, required: true },
  description: { type: String, required: true },
  path: { type: String, required: true },
  headline: { type: Boolean, default: false },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, index: true },
});

ArticleSchema.index({ body: "text" });

const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);
export default Article;
