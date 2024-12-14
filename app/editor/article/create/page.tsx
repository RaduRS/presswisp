"use client";

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ARTICLE } from "@/app/api/graphql/mutations";
import QuillEditor from "@/components/QuillEditor";
import { generatePath } from "@/helpers/TimeHelper";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [description, setDescription] = useState("");
  const [articleBody, setArticleBody] = useState("");
  const [createArticle, { loading, error }] = useMutation(CREATE_ARTICLE);

  const handleSubmit = async () => {
    try {
      const path = generatePath(title);
      console.log("Generated path:", path);
      await createArticle({
        variables: {
          input: {
            title,
            metaTitle,
            description,
            path,
            body: articleBody,
          },
        },
      });
      await fetch("/api/revalidate?path=/", { method: "POST" });
    } catch (err) {
      console.error("Error creating article:", err);
      alert("Failed to create article.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Article</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Meta Title"
        value={metaTitle}
        onChange={(e) => setMetaTitle(e.target.value)}
        className="w-full mb-4 p
      border border-gray-300 rounded"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        rows={4}
      />
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
