"use client";

import React, { useState } from "react";
import classNames from "classnames";
import { Banner } from "@/components/Banner";
import hero from "../../../public/assets/pricing/desktop/hero.jpg";
import { BetaBanner } from "@/components/BetaBanner";
import { Switch } from "@mui/material";
import { PricingPlan } from "@/components/PricingPlan";

export default function Pricing() {
  const [billing, setBilling] = useState<boolean>(false);

  const handleChange = () => {
    setBilling(!billing);
  };

  return (
    <main>
      <Banner
        image={hero}
        heading="PRICING"
        info="Create your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
      />
      <div
        className={classNames(
          "flex",
          "flex-row",
          "items-center",
          "justify-center",
          "mt-12",
          "text-2xl",
          "font-bold",
          "space-x-4",
        )}
      >
        <h1 className={classNames(!billing && "opacity-60")}>Monthly</h1>
        <Switch onChange={handleChange} />
        <h1 className={classNames(billing && "opacity-60")}>Yearly</h1>
      </div>
      <div className={classNames("mt-12")}>
        <PricingPlan
          plan="Basic"
          info="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          price={billing ? "19.00" : "190.00"}
          backgroundColor="bg-gray-100"
          buttonColor="bg-black"
          buttonText="text-white"
        />
        <PricingPlan
          plan="Pro"
          info="More advanced features available. Recommended for photography veterans and professionals."
          price={billing ? "39.00" : "390.00"}
          backgroundColor="bg-black"
          buttonColor="bg-white"
          buttonText="text-black"
        />
        <PricingPlan
          plan="Business"
          info="Additional features available such as more detailed metrics. Recommended for business owners."
          price={billing ? "99.00" : "990.00"}
          backgroundColor="bg-gray-100"
          buttonColor="bg-black"
          buttonText="text-white"
        />
      </div>
      <BetaBanner />
    </main>
  );
}
