import React from "react";
import classNames from "classnames";

export const BetaBanner: React.FC = () => {
  return (
    <div
      className={classNames(
        "beta-bg",
        "text-white",
        "py-20",
        "px-8",
        "md:flex",
        "md:flex-row",
        "md:py-12",
        "md:px-12",
        "md:justify-between",
      )}
    >
      <h1
        className={classNames(
          "text-5xl",
          "font-bold",
          "tracking-wide",
          "leading-snug",
          "mb-6",
          "md:w-[40vw]",
        )}
      >
        WE'RE IN BETA. GET YOUR INVITE TODAY!
      </h1>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "space-x-2",
          "md:items-center",
        )}
      >
        <button>GET AN INVITE</button>
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
  );
};
