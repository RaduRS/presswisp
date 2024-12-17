import { load } from "cheerio";
export const getFirstImageSrc = (html: string): string | null => {
  const $ = load(html);
  const img = $("img").first();
  return img.attr("src") || null;
};
