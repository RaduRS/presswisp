"use client";

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE } from "@/app/api/graphql/mutations";
import QuillEditor from "@/components/QuillEditor";

const CreateArticle = () => {
  const [articleBody, setArticleBody] = useState(""); // State to hold editor content
  const [createArticle, { loading, error }] = useMutation(CREATE_ARTICLE);

  const handleSubmit = async () => {
    try {
      const { data } = await createArticle({
        variables: {
          input: {
            body: articleBody, // Pass the editor content
          },
        },
      });
      console.log("Article created:", data.createArticle);
      alert("Article successfully created!");
    } catch (err) {
      console.error("Error creating article:", err);
      alert("Failed to create article.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Article</h2>

      {/* Editor Component */}
      <QuillEditor value={articleBody} setArticleBody={setArticleBody} />

      {/* Submit Button */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSubmit}
        disabled={loading || !articleBody.trim()}
      >
        {loading ? "Submitting..." : "Submit Article"}
      </button>

      {/* Error Message */}
      {error && <p className="mt-2 text-red-500">Error: {error.message}</p>}
    </div>
  );
};

export default CreateArticle;
