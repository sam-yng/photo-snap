import React from "react";
import classNames from "classnames";
import check from "../../public/assets/pricing/desktop/check.svg";
import Image from "next/image";

type FeatureChartRowProps = {
  feature: string;
  basic?: boolean;
  pro?: boolean;
  business?: boolean;
};

export const FeatureChartRow: React.FC<FeatureChartRowProps> = ({
  feature,
  basic,
  pro,
  business,
}) => {
  return (
    <>
      <div className={classNames("space-y-6")}>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "md:grid",
            "md:grid-cols-5",
            "md:items-center",
          )}
        >
          <h1 className={classNames("my-3", "font-bold", "md:col-span-2")}>
            {feature.toUpperCase()}
          </h1>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "md:hidden",
              "justify-between",
            )}
          >
            <div className={classNames("space-y-3")}>
              <h1 className={classNames("opacity-70", "md:hidden")}>BASIC</h1>
              {basic && <Image src={check} alt="check" />}
            </div>
            <div className={classNames("space-y-3")}>
              <h1 className={classNames("opacity-70", "md:hidden")}>PRO</h1>
              {pro && <Image src={check} alt="check" />}
            </div>
            <div className={classNames("space-y-3")}>
              <h1 className={classNames("opacity-70", "md:hidden")}>
                BUSINESS
              </h1>
              {business && <Image src={check} alt="check" />}
            </div>
          </div>
          <div className="mx-auto hidden md:block">
            {basic && <Image src={check} alt="check" />}
          </div>
          <div className="mx-auto hidden md:block">
            {pro && <Image src={check} alt="check" />}
          </div>
          <div className="mx-auto hidden md:block">
            {business && <Image src={check} alt="check" />}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
