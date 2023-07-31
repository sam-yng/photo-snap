import React from "react";
import classNames from "classnames";
import hero from "../../../public/assets/features/desktop/hero.jpg";
import Image from "next/image";
import { Feature } from "@/components/Feature";
import featureOne from "../../../public/assets/features/desktop/responsive.svg";
import featureTwo from "../../../public/assets/features/desktop/no-limit.svg";
import featureThree from "../../../public/assets/features/desktop/embed.svg";
import featureFour from "../../../public/assets/features/desktop/custom-domain.svg";
import featureFive from "../../../public/assets/features/desktop/boost-exposure.svg";
import featureSix from "../../../public/assets/features/desktop/drag-drop.svg";
import { BetaBanner } from "@/components/BetaBanner";
import { Banner } from "@/components/Banner";

export default function Features() {
  return (
    <main>
      <Banner
        image={hero}
        heading="FEATURES"
        info="We make sure all of our features are designed to be loved by every
            aspiring and even professional photographers who wanted to share
            their stories."
      />
      <article
        className={classNames(
          "flex",
          "flex-col",
          "mb-20",
          "md:grid",
          "md:grid-rows-2",
          "md:grid-cols-3",
        )}
      >
        <Feature
          icon={featureOne}
          feature="100% Responsive"
          details="No matter which device you're on, our site is fully responsive and stories look beautiful on any screen."
        />
        <Feature
          icon={featureTwo}
          feature="No Photo Upload Limit"
          details="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <Feature
          icon={featureThree}
          feature="Available to Embed"
          details="Embeded Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more."
        />
        <Feature
          icon={featureFour}
          feature="Custom Domain"
          details="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
        />
        <Feature
          icon={featureFive}
          feature="Boost Your Exposure"
          details="Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list."
        />
        <Feature
          icon={featureSix}
          feature="Drag & Drop Image"
          details="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
        />
      </article>
      <BetaBanner />
    </main>
  );
}
