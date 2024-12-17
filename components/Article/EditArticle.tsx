import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import ArticleForm from "./ArticleForm";
import { GET_ARTICLE } from "@/app/api/graphql/queries";
import { UPSERT_ARTICLE } from "@/app/api/graphql/mutations";
import { generatePath } from "@/helpers/TimeHelper";

const EditArticle = ({ path }: { path: string }) => {
  const {
    data,
    loading: queryLoading,
    error: queryError,
  } = useQuery(GET_ARTICLE, {
    variables: { path },
    fetchPolicy: "network-only",
  });

  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [headline, setHeadline] = useState(false);
  const [articleBody, setArticleBody] = useState("");

  const [upsertArticle, { loading: mutationLoading }] =
    useMutation(UPSERT_ARTICLE);

  // Update state when query data is fetched
  useEffect(() => {
    if (data?.getArticle) {
      const { id, title, metaTitle, description, headline, body } =
        data.getArticle;
      setId(id);
      setTitle(title);
      setMetaTitle(metaTitle);
      setDescription(description);
      setHeadline(headline);
      setArticleBody(body);
    }
  }, [data]);

  const handleSubmit = async (readingTime: number) => {
    const newPath = generatePath(metaTitle);
    try {
      await upsertArticle({
        variables: {
          input: {
            id,
            path: newPath,
            title,
            metaTitle,
            description,
            headline,
            readingTime,
            body: articleBody,
          },
        },
      });
      await fetch("/api/revalidate?path=/", { method: "POST" });
    } catch (err) {
      console.error("Error updating article:", err);
      alert("Failed to update article.");
    }
  };

  if (queryLoading) return <p>Loading article...</p>;
  if (queryError) return <p>Error loading article: {queryError.message}</p>;

  return (
    <ArticleForm
      title={title}
      setTitle={setTitle}
      metaTitle={metaTitle}
      setMetaTitle={setMetaTitle}
      description={description}
      setDescription={setDescription}
      headline={headline}
      setHeadline={setHeadline}
      articleBody={articleBody}
      setArticleBody={setArticleBody}
      onSubmit={handleSubmit}
      isSubmitting={mutationLoading}
    />
  );
};

export default EditArticle;
