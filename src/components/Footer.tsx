import React from "react";
import classNames from "classnames";
import Image from "next/image";
import logo from "../../public/assets/logo-white.svg";
import facebook from "../../public/assets/logos/icons8-facebook-50.png";
import youtube from "../../public/assets/logos/icons8-youtube.svg";
import twitter from "../../public/assets/logos/icons8-twitter.svg";
import pinterest from "../../public/assets/logos/icons8-pinterest.svg";
import instagram from "../../public/assets/logos/icons8-instagram-26.png";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer
      className={classNames(
        "flex",
        "flex-col",
        "bg-black",
        "text-white",
        "px-24",
      )}
    >
      <div className={classNames("mx-auto", "text-center", "my-20")}>
        <Image className={classNames("w-64", "mb-8")} src={logo} alt="logo" />
        <div
          className={classNames(
            "flex",
            "flex-row",
            "w-full",
            "justify-between",
            "mb-16",
          )}
        >
          <Link target="blank" href="https://www.facebook.com/">
            <Image
              className={classNames("w-auto", "h-6")}
              alt="facebook"
              src={facebook}
            />
          </Link>
          <Link target="blank" href="https://www.youtube.com/">
            <Image
              className={classNames("w-auto", "h-6")}
              alt="youtube"
              src={youtube}
            />
          </Link>
          <Link target="blank" href="https://twitter.com/home">
            <Image
              className={classNames("w-auto", "h-6")}
              alt="twitter"
              src={twitter}
            />
          </Link>
          <Link target="blank" href="https://www.pinterest.com.au/">
            <Image
              className={classNames("w-auto", "h-6")}
              alt="pinterest"
              src={pinterest}
            />
          </Link>
          <Link target="blank" href="https://www.instagram.com/">
            <Image
              className={classNames("w-auto", "h-6")}
              alt="instagram"
              src={instagram}
            />
          </Link>
        </div>
        <div className={classNames("flex", "flex-col", "space-y-8", "mb-20")}>
          <Link href="/">HOME</Link>
          <Link href="/stories">STORIES</Link>
          <Link href="/features">FEATURES</Link>
          <Link href="/pricing">PRICING</Link>
        </div>
        <div
          className={classNames("flex", "flex-row", "justify-between", "mx-3")}
        >
          <button className={classNames("tracking-wide")}>GET AN INVITE</button>
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
        <p className={classNames("opacity-70", "mt-6")}>
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
