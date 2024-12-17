import { load } from "cheerio";
export const getFirstImageSrc = (html: string): string | null => {
  const $ = load(html);
  const img = $("img").first();
  return img.attr("src") || null;
};

export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};
