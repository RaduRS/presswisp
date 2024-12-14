"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import EditArticle from "@/components/Article/EditArticle";

const EditArticlePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = searchParams.get("path");

  if (!path) {
    router.push("/editor"); // Redirect to the editor dashboard if no path is provided
    return null;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Edit Article</h2>
      <EditArticle path={path} />
    </div>
  );
};

export default EditArticlePage;
