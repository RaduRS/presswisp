import Cards from "@/components/CardComponent/Cards";
import client from "@/lib/apolloClient";
import { GET_ARTICLES } from "./api/graphql/queries";

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
