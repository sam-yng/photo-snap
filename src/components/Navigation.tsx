"use client";

import React from "react";
import classNames from "classnames";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      className={classNames(
        "flex",
        "flex-row",
        "justify-between",
        "md:mx-6",
        "items-center",
      )}
    >
      <Link href="/">
        <Image className={classNames("p-8", "w-64")} alt="logo" src={logo} />
      </Link>
      <div
        className={classNames(
          "md:block",
          "hidden",
          "space-x-6",
          "font-bold",
          "text-sm",
        )}
      >
        <Link
          className={classNames(pathname === "/stories" && "opacity-40")}
          href="/stories"
        >
          STORIES
        </Link>
        <Link
          className={classNames(pathname === "/features" && "opacity-40")}
          href="/features"
        >
          FEATURES
        </Link>
        <Link
          className={classNames(pathname === "/pricing" && "opacity-40")}
          href="/pricing"
        >
          PRICING
        </Link>
      </div>
      <div className={classNames("md:block", "hidden", "w-64")}>
        <button
          className={classNames(
            "border",
            "border-black",
            "px-5",
            "py-2",
            "text-white",
            "bg-black",
            "text-sm",
            "font-bold",
          )}
        >
          GET AN INVITE
        </button>
      </div>
    </nav>
  );
};
