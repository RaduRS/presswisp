import client from "@/lib/apolloClient";
import { Metadata } from "next";
import { GET_ARTICLE } from "../api/graphql/queries";
export const revalidate = 0;
export async function generateMetadata({
  params,
}: {
  params: { path: string };
}): Promise<Metadata> {
  const { data } = await client.query({
    query: GET_ARTICLE,
    variables: { path: params.path },
    fetchPolicy: "network-only",
  });

  const article = data?.getArticle;

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

const ArticlePage = async ({ params }: { params: { path: string } }) => {
  const { path } = params;

  const { data } = await client.query({
    query: GET_ARTICLE,
    variables: { path },
    fetchPolicy: "network-only",
  });

  const article = data?.getArticle;

  if (!article) {
    return <h1>404 - Article Not Found</h1>;
  }

  const { title, description, body, date } = article;

  return (
    <section className="flex flex-row  justify-center p-8 w-full max-w-[1024px] mx-auto">
      <article className="prose max-w-full">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-4 italic ">{description}</p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <p className="text-sm text-gray-500 mt-4">
          Published: {new Date(date).toLocaleString()}
        </p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-4">Related Articles</h2>
      </article>
    </section>
  );
};

export default ArticlePage;
