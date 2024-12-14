"use client";

import React from "react";
// import ArticlesTable from "@/components/ArticlesTable";
import CreateArticleButton from "@/components/CreateArticleButton";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Editor = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mb-4">Editor Dashboard</h2>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <CreateArticleButton />
      {/* <ArticlesTable /> */}
    </div>
  );
};

export default Editor;
