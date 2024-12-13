import React from "react";
import { useRouter } from "next/navigation";

const CreateArticleButton = () => {
  const router = useRouter();

  const handleCreateArticle = () => {
    router.push(`/editor/article/create`);
  };
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleCreateArticle}
    >
      Create New Article
    </button>
  );
};

export default CreateArticleButton;
