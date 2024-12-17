"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getFirstImageSrc } from "@/helpers/generalHelpers";
import { getRelativeTime } from "@/helpers/TimeHelper";

interface HeadlineProps {
  title: string;
  description: string;
  body: string;
  path: string;
  date: string;
}

const Headline = ({ title, description, body, date, path }: HeadlineProps) => {
  const router = useRouter();
  const relativeTime = getRelativeTime(date);
  const imageSrc = getFirstImageSrc(body);

  const openArticle = () => {
    router.push(`/${path}`);
  };

  return (
    <section className="flex w-full cursor-pointer" onClick={openArticle}>
      {imageSrc && (
        <aside className="min-w-[50%] w-1/2 h-[300px] relative mr-6 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-lg"
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </aside>
      )}
      <article className="flex flex-col justify-between w-1/2 prose">
        <span className="time text-gray-500 text-sm">{relativeTime}</span>

        <h2 className="font-bold text-h2 m-0 leading-tight line-clamp-2">
          {title}
        </h2>
        <p className="text-body text-gray-600 leading-relaxed line-clamp-3 m-0">
          {description}
        </p>
        <p className="m-0">
          {" "}
          <span className="text-red-500 font-semibold">Movies</span>
          <span className="mx-2">•</span>
          <span className="text-gray-600">4 min read</span>
        </p>
      </article>
    </section>
  );
};

export default Headline;
