import React from "react";
import classNames from "classnames";
import hero from "../../../public/assets/stories/desktop/moon-of-appalacia.jpg";
import Image from "next/image";
import { TextBox } from "@/components/TextBox";
import { StoryBox } from "@/components/StoryBox";

export default function Stories() {
  return (
    <main>
      <Image src={hero} alt="mountains" />
      <TextBox
        hideImage
        title="Hazy full moon of appalachia"
        backgroundColor="bg-black"
        info="The dissected plateau area, while not actually made up of geological mountains, is popularly called &:posmountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
        buttonText="READ THE STORY"
        storiesPage
      />
      <StoryBox
        backgroundImage="storyone-bg"
        title="The Mountains"
        author="John Appleseed"
        date="April 16th 2020"
      />
    </main>
  );
}
