"use client";

import CreateArticle from "@/components/Article/CreateArticle";
import React from "react";

const CreateArticlePage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Article</h2>
      <CreateArticle />
    </div>
  );
};

export default CreateArticlePage;
