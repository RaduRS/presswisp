"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import EditArticle from "@/components/Article/EditArticle";

const EditArticleContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = searchParams.get("path");

  if (!path) {
    router.push("/editor");
    return null;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Edit Article</h2>
      <EditArticle path={path} />
    </div>
  );
};

const EditArticlePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditArticleContent />
    </Suspense>
  );
};

export default EditArticlePage;
