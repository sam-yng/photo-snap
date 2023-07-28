import React from "react";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type FeatureProps = {
  icon: string | StaticImport;
  feature: string;
  details: string;
};

export const Feature: React.FC<FeatureProps> = ({
  icon,
  feature,
  details,
}: FeatureProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "text-center",
        "justify-center",
        "mt-20",
        "mx-10",
        "space-y-6",
      )}
    >
      <Image className={classNames("mx-auto")} src={icon} alt={feature} />
      <h1 className={classNames("font-bold", "text-xl")}>{feature}</h1>
      <p className={classNames("leading-relaxed", "opacity-70")}>{details}</p>
    </div>
  );
};
