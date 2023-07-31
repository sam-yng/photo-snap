import React from "react";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type BannerProps = {
  image: string | StaticImport;
  heading: string;
  info: string;
};

export const Banner: React.FC<BannerProps> = ({
  image,
  heading,
  info,
}: BannerProps) => {
  return (
    <>
      <div className={classNames("md:hidden", "block")}>
        <Image alt="hero" src={image} />
        <div
          className={classNames(
            "bg-black",
            "text-white",
            "py-16",
            "px-8",
            "space-y-6",
          )}
        >
          <h1 className={classNames("font-bold", "text-4xl")}>{heading}</h1>
          <p className={classNames("text-lg", "leading-relaxed")}>{info}</p>
        </div>
      </div>
      <div
        className={classNames(
          "md:block",
          "hidden",
          "md:flex",
          "md:flex-row",
          "bg-black",
        )}
      >
        <div
          className={classNames(
            "text-white",
            "px-12",
            "space-y-6",
            "w-[45vw]",
            "my-auto",
          )}
        >
          <h1 className={classNames("font-bold", "text-4xl")}>{heading}</h1>
          <p className={classNames("text-lg", "leading-relaxed")}>{info}</p>
        </div>
        <Image alt="hero" src={image} className={classNames("w-full")} />
      </div>
    </>
  );
};
