import React from "react";
import classNames from "classnames";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export const Navigation: React.FC = () => {
  return (
    <nav
      className={classNames(
        "flex",
        "flex-row",
        "justify-between",
        "mx-6",
        "items-center",
      )}
    >
      <Image className={classNames("p-8", "w-64")} alt="logo" src={logo} />
      <div className={classNames("hidden md:block")}>
        <Link href="/stories">STORIES</Link>
        <Link href="/features">FEATURES</Link>
        <Link href="/pricing">PRICING</Link>
      </div>
      <button className={classNames("border", "border-black", "p-4")}>
        GET AN INVITE
      </button>
    </nav>
  );
};
