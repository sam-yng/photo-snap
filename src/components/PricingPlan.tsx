import React from "react";
import classNames from "classnames";

type PricingPlanProps = {
  plan: string;
  info: string;
  price: string;
  backgroundColor: string;
  buttonColor: string;
  buttonText: string;
};

export const PricingPlan: React.FC<PricingPlanProps> = ({
  plan,
  info,
  price,
  backgroundColor,
  buttonColor,
  buttonText,
}: PricingPlanProps) => {
  return (
    <article
      className={classNames(
        "flex",
        "flex-col",
        "text-center",
        "justify-between",
        backgroundColor,
        "py-8",
        "mx-8",
        "px-8",
        "space-y-6",
        backgroundColor === "bg-black" && "text-white",
        "mb-12",
      )}
    >
      <h1 className={classNames("font-bold", "text-3xl")}>{plan}</h1>
      <p className={classNames("opacity-70")}>{info}</p>
      <div>
        <h1 className={classNames("font-bold", "text-4xl", "mb-2")}>
          ${price}
        </h1>
        <p>per {price.length > 5 ? "year" : "month"}</p>
      </div>
      <button className={classNames(buttonColor, buttonText, "py-2")}>
        PICK PLAN
      </button>
    </article>
  );
};
