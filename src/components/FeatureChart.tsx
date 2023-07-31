import React from "react";
import { FeatureChartRow } from "./FeatureChartRow";
import classNames from "classnames";

export const FeatureChart: React.FC = () => {
  return (
    <div className="mb-12">
      <div
        className={classNames(
          "md:grid",
          "hidden",
          "grid-cols-5",
          "justify-between",
          "text-center",
          "mb-4",
        )}
      >
        <div className={classNames("col-span-2", "text-left")}>
          <h1>THE FEATURES</h1>
        </div>
        <div className={classNames("col-span-1")}>BASIC</div>
        <div className={classNames("col-span-1")}>PRO</div>
        <div className={classNames("col-span-1")}>BUSINESS</div>
      </div>
      <hr color="black" className={classNames("hidden", "md:block")} />
      <FeatureChartRow feature="unlimited story posting" basic pro business />
      <FeatureChartRow feature="unlimited photo upload" basic pro business />
      <FeatureChartRow feature="embedding custom content" pro business />
      <FeatureChartRow feature="customize metadata" pro business />
      <FeatureChartRow feature="advanced metrics" business />
      <FeatureChartRow feature="photo downloads" business />
      <FeatureChartRow feature="search engine indexing" business />
      <FeatureChartRow feature="custom analytics" business />
    </div>
  );
};
