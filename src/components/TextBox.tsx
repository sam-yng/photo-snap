import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TextBoxProps = {
  title: string;
  info: string;
  buttonText: string;
  backgroundColor?: string;
  imageSrc?: string | StaticImport;
  hideImage?: boolean;
  storiesPage?: boolean;
};

export const TextBox: React.FC<TextBoxProps> = ({
  title,
  info,
  buttonText,
  backgroundColor,
  imageSrc,
  hideImage,
  storiesPage,
}: TextBoxProps) => {
  return (
    <div className={classNames("flex", "md:flex-row", "flex-col")}>
      <Image
        className={classNames("w-full", hideImage && "hidden")}
        alt="TextBox header"
        src={imageSrc as StaticImport}
      />
      <article
        className={classNames(
          "flex",
          "flex-col",
          "text-left",
          backgroundColor,
          backgroundColor ? "text-white" : "text-black",
          "p-8",
          "space-y-6",
          "py-14",
        )}
      >
        {storiesPage && (
          <p className={classNames("font-bold")}>LAST MONTH"S FEATURED STORY</p>
        )}
        <h1 className={classNames("text-4xl", "leading-normal", "font-bold")}>
          {title.toUpperCase()}
        </h1>
        {storiesPage && (
          <div className={classNames("flex", "flex-row", "space-x-2")}>
            <p className={classNames("opacity-70")}>March 2nd 2020 </p>
            <p>by John Appleseed</p>
          </div>
        )}
        <p className={classNames("opacity-70", "leading-relaxed")}>{info}</p>
        <div className={classNames("flex", "flex-row", "space-x-4")}>
          <button>{buttonText}</button>
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
      </article>
    </div>
  );
};
