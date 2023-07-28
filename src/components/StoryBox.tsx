import React from "react";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type StoryBoxProps = {
  backgroundImage: string;
  title: string;
  author: string;
};

export const StoryBox: React.FC<StoryBoxProps> = ({
  backgroundImage,
  title,
  author,
}: StoryBoxProps) => {
  return (
    <article
      className={classNames(
        backgroundImage,
        "h-[55vh]",
        "flex",
        "flex-col",
        "text-white",
      )}
    >
      <div className={classNames("mt-auto", "p-8")}>
        <h1 className={classNames("font-bold", "mb-2", "text-xl")}>{title}</h1>
        <p className={classNames("mb-5", "text-gray-300")}>by {author}</p>
        <hr />
        <div
          className={classNames("flex", "flex-row", "justify-between", "mt-2")}
        >
          <button className={classNames("text-sm")}>READ STORY</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="currentColor"
            className="w-12 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </article>
  );
};
