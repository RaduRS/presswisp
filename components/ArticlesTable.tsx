"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { Article } from "@/types/types";
import { GET_ARTICLES } from "@/app/api/graphql/queries";

const ArticlesTable = () => {
  const { data, loading, error } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const articles = data?.getArticles || [];

  return (
    <div className="mt-8">
      <h1 className="text-xl font-semibold mb-4">All Articles</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Body</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article: Article) => {
            return (
              <tr key={article.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {article.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* Render sanitized HTML */}
                  <div dangerouslySetInnerHTML={{ __html: article.body }} />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(article.date).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="text-blue-500 hover:underline mr-2">
                    Update
                  </button>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesTable;
