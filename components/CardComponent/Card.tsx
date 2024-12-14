"use client";

import { getRelativeTime } from "@/helpers/TimeHelper";
import { CardProps } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";
import EditButton from "../EditButton";

const Card = ({ title, imageSrc, date, path }: CardProps) => {
  const router = useRouter();
  const relativeTime = getRelativeTime(date);

  const openArticle = () => {
    router.push(`/${path}`);
  };

  return (
    <div
      className="card border border-gray-300 rounded-md shadow-md p-4"
      onClick={openArticle}
    >
      <div className="image mb-4">
        <img src={imageSrc} alt="Article image" className="rounded" />
      </div>
      <div className="body mb-4"> {title}</div>
      <div className="time text-gray-500 text-sm">{relativeTime}</div>
      <EditButton path={path} />
    </div>
  );
};

export default Card;
