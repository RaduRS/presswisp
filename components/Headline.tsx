"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getFirstImageSrc } from "@/helpers/generalHelpers";

interface HeadlineProps {
  title: string;
  description: string;
  body: string;
  path: string;
}

const Headline = ({ title, description, body, path }: HeadlineProps) => {
  const router = useRouter();

  const imageSrc = getFirstImageSrc(body);

  const openArticle = () => {
    router.push(`/${path}`);
  };

  return (
    <div className="flex" onClick={openArticle}>
      {imageSrc && (
        <div className="w-48 h-48 relative mr-6">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-md"
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Headline;
