import React from "react";
import classNames from "classnames";
import { Banner } from "@/components/Banner";
import hero from "../../../public/assets/pricing/desktop/hero.jpg";
import { BetaBanner } from "@/components/BetaBanner";

export default function Pricing() {
  return (
    <main>
      <Banner
        image={hero}
        heading="PRICING"
        info="Create your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
      />
      <div></div>
      <BetaBanner />
    </main>
  );
}
