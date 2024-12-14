import Cards from "@/components/CardComponent/Cards";
import client from "@/lib/apolloClient";
import { GET_ARTICLES } from "./api/graphql/queries";
import { Metadata } from "next";
import { ArticleBase } from "@/types/types";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await client.query({
    query: GET_ARTICLES,
    fetchPolicy: "network-only",
  });

  const articles = data?.getArticles || [];

  const topArticle = articles[0];
  const articleTitles = articles
    .map((article: ArticleBase) => article.title)
    .slice(0, 5);

  return {
    title: "PressWisp - Latest News",
    description: `Explore the latest news and insights on PressWisp. Stay informed with curated articles on trending topics from trusted sources like: ${articleTitles.join(
      ", "
    )}.`,
    openGraph: {
      title: "PressWisp - Latest News",
      description: topArticle
        ? `PressWisp delivers top news and insights. Check out our featured article: "${topArticle.title}".`
        : "PressWisp delivers top news and insights, curated to keep you informed and ahead of the curve.",
      type: "website",
      url: "https://presswisp.com/",
      images: [
        {
          url: topArticle?.imageSrc || "https://presswisp.com/default-og.png",
          width: 1200,
          height: 630,
          alt: topArticle?.title || "PressWisp Homepage",
        },
      ],
    },
  };
}


export default async function Home() {
  const { data } = await client.query({
    query: GET_ARTICLES,
    fetchPolicy: "network-only",
  });

  const articles = data?.getArticles.slice(0, 10) || [];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Welcome to the Articles Portal</h1>
      <Cards articles={articles} />
      <footer className="text-gray-500">© 2024 Your Website</footer>
    </div>
  );
}
