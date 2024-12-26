"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getFirstImageSrc } from "@/helpers/generalHelpers";
import { getRelativeTime } from "@/helpers/TimeHelper";
import { Clock3 } from "lucide-react";

interface HeadlineProps {
  title: string;
  description: string;
  readingTime: number;
  body: string;
  path: string;
  date: string;
}

const Headline = ({
  title,
  description,
  readingTime,
  body,
  date,
  path,
}: HeadlineProps) => {
  const router = useRouter();
  const relativeTime = getRelativeTime(date);
  const imageSrc = getFirstImageSrc(body);

  const openArticle = () => {
    router.push(`/${path}`);
  };

  return (
    <section
      className="flex flex-col md:flex-row w-full cursor-pointer"
      onClick={openArticle}
    >
      {imageSrc && (
        <>
          <aside className="min-w-[50%] w-full md:w-1/2 h-[300px] relative md:mr-6 flex items-end">
            <div className="absolute inset-0 bg-black opacity-40 z-10 rounded-lg md:hidden"></div>
            <article className="block md:hidden z-10 p-4">
              <h2 className="font-bold text-h2 m-0 leading-tight line-clamp-3 text-gray-50">
                {title}
              </h2>
              <span className="time text-gray-100 text-sm">{relativeTime}</span>
            </article>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="rounded-lg z-0"
              priority
              style={{
                objectFit: "cover",
              }}
            />
          </aside>
          <article className="block md:hidden">
            <p className="text-body text-gray-600 leading-relaxed line-clamp-3 m-0 mt-4 text-balance">
              {description}
            </p>
            <div className="m-0 flex justify-between items-center text-sm">
              <span className="text-red-500 font-semibold">Movies</span>
              <div className="flex items-center">
                <Clock3 size={16} className="text-gray-600 mr-2" />
                <span className="text-gray-600">{readingTime} min read</span>
              </div>
            </div>
          </article>
        </>
      )}
      <article className="flex-col w-full md:w-1/2 justify-between prose hidden md:flex text-balance">
        <span className="time text-gray-500 text-sm hidden md:block">
          {relativeTime}
        </span>

        <h2 className="font-bold text-h2 m-0 leading-tight line-clamp-3">
          {title}
        </h2>
        <p className="text-body text-gray-600 leading-relaxed line-clamp-3 m-0">
          {description}
        </p>
        <div className="m-0 flex justify-between items-center text-sm">
          <span className="text-red-500 font-semibold">Movies</span>
          <div className="flex items-center">
            <Clock3 size={16} className="text-gray-600 mr-2" />
            <span className="text-gray-600">{readingTime} min read</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Headline;
