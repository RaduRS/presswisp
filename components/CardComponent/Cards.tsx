"use client";

import React from "react";
import Card from "./Card";
import { CardsProps } from "@/types/types";

const Cards = ({ articles }: CardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {articles.map((article) => (
        <Card
          key={article.id}
          id={article.id}
          imageSrc="https://via.placeholder.com/150"
          title={article.title}
          description={article.description}
          body={article.body}
          date={article.date}
        />
      ))}
    </div>
  );
};

export default Cards;
