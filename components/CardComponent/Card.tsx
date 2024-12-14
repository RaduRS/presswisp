"use client";

import { getRelativeTime } from "@/helpers/TimeHelper";
import { CardProps } from "@/types/types";
import React from "react";

const Card = ({ title, imageSrc, date }: CardProps) => {
  console.log("Title:", title); // Debugging
  const relativeTime = getRelativeTime(date);

  return (
    <div className="card border border-gray-300 rounded-md shadow-md p-4">
      <div className="image mb-4">
        <img src={imageSrc} alt="Article image" className="w-full rounded" />
      </div>
      <div className="body mb-4"> {title}</div>
      <div className="time text-gray-500 text-sm">{relativeTime}</div>
    </div>
  );
};

export default Card;
