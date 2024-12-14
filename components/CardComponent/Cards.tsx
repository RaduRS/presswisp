"use client";

import React from "react";
import Card from "./Card";
import { CardsProps } from "@/types/types";
import Head from "next/head";

const Cards = ({ articles }: CardsProps) => {
  return (
    <>
      <Head>
        {articles.map((article) => (
          <React.Fragment key={article.id}>
            <meta property="og:title" content={article.metaTitle} />
            <meta property="og:description" content={article.description} />
            <meta
              property="og:url"
              content={`https://presswisp.com/${article.path}`}
            />
          </React.Fragment>
        ))}
      </Head>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {articles.map((article) => (
          <Card
            key={article.id}
            id={article.id}
            imageSrc="https://via.placeholder.com/150"
            title={article.title}
            metaTitle={article.metaTitle}
            description={article.description}
            path={article.path}
            body={article.body}
            date={article.date}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
