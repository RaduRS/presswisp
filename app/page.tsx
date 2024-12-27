import Cards from "@/components/CardComponent/Cards";
import client from "@/lib/apolloClient";
import { GET_ARTICLES, GET_HEADLINE_ARTICLE } from "./api/graphql/queries";
// import { Metadata } from "next";
// import { ArticleBase } from "@/types/types";
import Headline from "@/components/Headline";

export const dynamic = "force-static";
export const revalidate = false;
// export async function generateMetadata(): Promise<Metadata> {
//   const { data } = await client.query({
//     query: GET_ARTICLES,
//     fetchPolicy: "network-only",
//   });

//   const articles = data?.getArticles || [];

//   const topArticle = articles[0];
//   const articleMetaTitles = articles
//     .map((article: ArticleBase) => article.metaTitle)
//     .slice(0, 3);

//   return {
//     title: "PressWisp - Latest News",
//     description: `Explore the latest news and insights on PressWisp. Stay informed with curated articles on trending topics from trusted sources like: ${articleMetaTitles.join(
//       ", "
//     )}.`,
//     openGraph: {
//       title: "PressWisp - Latest News",
//       description: topArticle
//         ? `PressWisp delivers top news and insights. Check out our featured article: "${topArticle.metaTitle}".`
//         : "PressWisp delivers top news and insights, curated to keep you informed and ahead of the curve.",
//       type: "website",
//       url: "https://presswisp.com/",
//       images: [
//         {
//           url: topArticle?.imageSrc || "https://presswisp.com/default-og.png",
//           width: 1200,
//           height: 630,
//           alt: topArticle?.metaTitle || "PressWisp Homepage",
//         },
//       ],
//     },
//   };
// }

export default async function Home() {
  const { data: headlineData } = await client.query({
    query: GET_HEADLINE_ARTICLE,
    fetchPolicy: "network-only",
  });

  const headlineArticle = headlineData?.getHeadlineArticle;

  const { data } = await client.query({
    query: GET_ARTICLES,
    fetchPolicy: "network-only",
  });

  const articles = data?.getArticles.slice(0, 10) || [];

  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-8 gap-16 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Welcome to the Press Wisp</h1>
      <section className="w-full max-w-[1024px] gap-16 flex flex-col">
        {headlineArticle && (
          <Headline
            title={headlineArticle.title}
            description={headlineArticle.description}
            readingTime={headlineArticle.readingTime}
            body={headlineArticle.body}
            path={headlineArticle.path}
            date={headlineArticle.date}
          />
        )}
        <Cards articles={articles} />
      </section>
      <footer className="text-gray-500">© 2024 Your Website</footer>
    </div>
  );
}
