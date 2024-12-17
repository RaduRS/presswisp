"use client";

import { getRelativeTime } from "@/helpers/TimeHelper";
import { ArticleBase } from "@/types/types";
import { useRouter } from "next/navigation";
import React from "react";
import EditButton from "../EditButton";
import Image from "next/image";
import { getFirstImageSrc } from "@/helpers/generalHelpers";

const Card = ({ title, body, date, path }: ArticleBase) => {
  const router = useRouter();
  const relativeTime = getRelativeTime(date);

  const imageSrc = getFirstImageSrc(body);

  const openArticle = () => {
    router.push(`/${path}`);
  };

  return (
    <div
      className="card border border-gray-300 rounded-md shadow-md p-4 prose"
      onClick={openArticle}
    >
      {imageSrc ? (
        <div className="max-w-32">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={300}
            className="rounded"
            priority
          />
        </div>
      ) : (
        <div className="text-gray-500 italic">No image available</div>
      )}
      <div className="body mb-4"> {title}</div>
      <div className="time text-gray-500 text-sm">{relativeTime}</div>
      <EditButton path={path} />
    </div>
  );
};

export default Card;
