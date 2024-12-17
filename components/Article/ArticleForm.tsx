import React, { useEffect, useState } from "react";
import QuillEditor from "@/components/QuillEditor";
import { calculateReadingTime } from "@/helpers/generalHelpers";

interface ArticleFormProps {
  title: string;
  setTitle: (value: string) => void;
  metaTitle: string;
  setMetaTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  headline: boolean;
  setHeadline: (value: boolean) => void;
  articleBody: string;
  setArticleBody: (value: string) => void;
  onSubmit: (readingTime: number) => void;
  isSubmitting: boolean;
}

const ArticleForm = ({
  title,
  setTitle,
  metaTitle,
  setMetaTitle,
  description,
  setDescription,
  articleBody,
  setArticleBody,
  onSubmit,
  isSubmitting,
  headline,
  setHeadline,
}: ArticleFormProps) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const time = calculateReadingTime(articleBody);
    setReadingTime(time);
  }, [articleBody]);

  const handleSubmit = () => {
    onSubmit(readingTime); // Pass readingTime to parent
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="checkbox"
        checked={headline}
        onChange={(e) => setHeadline(e.target.checked)}
        className="mr-2"
      />
      <input
        type="text"
        placeholder="Meta Title"
        value={metaTitle}
        onChange={(e) => setMetaTitle(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        rows={4}
      />
      <QuillEditor value={articleBody} setArticleBody={setArticleBody} />
      <p>Estimated Reading Time: {readingTime} minutes</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSubmit}
        disabled={isSubmitting || !articleBody.trim()}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default ArticleForm;
