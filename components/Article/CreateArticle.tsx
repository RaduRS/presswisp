import { generatePath } from "@/helpers/TimeHelper";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import ArticleForm from "./ArticleForm";
import { UPSERT_ARTICLE } from "@/app/api/graphql/mutations";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [headline, setHeadline] = useState(false);
  const [articleBody, setArticleBody] = useState("");
  const [upsertArticle, { loading }] = useMutation(UPSERT_ARTICLE);

  const handleSubmit = async (readingTime: number) => {
    const path = generatePath(metaTitle);
    await upsertArticle({
      variables: {
        input: {
          path,
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
  };

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
      isSubmitting={loading}
    />
  );
};

export default CreateArticle;
