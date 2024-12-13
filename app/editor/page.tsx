"use client";

import React from "react";
import ArticlesTable from "@/components/ArticlesTable";
import CreateArticleButton from "@/components/CreateArticleButton";

const Editor = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Editor Dashboard</h2>
      <CreateArticleButton />
      <ArticlesTable />
    </div>
  );
};

export default Editor;
