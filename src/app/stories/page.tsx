import React from "react";
import classNames from "classnames";
import hero from "../../../public/assets/stories/desktop/moon-of-appalacia.jpg";
import Image from "next/image";
import { TextBox } from "@/components/TextBox";
import { StoryBox } from "@/components/StoryBox";

export default function Stories() {
  return (
    <main>
      <div className={classNames("md:hidden", "block")}>
        <Image src={hero} alt="mountains" />
        <TextBox
          hideImage
          title="Hazy full moon of appalachia"
          backgroundColor="bg-black"
          info="The dissected plateau area, while not actually made up of geological mountains, is popularly called &:posmountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
          buttonText="READ THE STORY"
          storiesPage
        />
      </div>
      <div className={classNames("md:block", "hidden", "mountains-bg")}>
        <div className={classNames("w-[40vw]", "py-6", "ml-6")}>
          <TextBox
            hideImage
            title="Hazy full moon of appalachia"
            backgroundColor="bg-transparent"
            info="The dissected plateau area, while not actually made up of geological mountains, is popularly called &:posmountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
            buttonText="READ THE STORY"
            storiesPage
          />
        </div>
      </div>
      <div
        className={classNames(
          "md:grid",
          "md:grid-cols-4",
          "md:grid-rows-4",
          "flex",
          "flex-col",
        )}
      >
        <StoryBox
          backgroundImage="storyone-bg"
          title="The Mountains"
          author="John Appleseed"
          date="April 16th 2020"
        />
        <StoryBox
          backgroundImage="storytwo-bg"
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          date="April 14th 2020"
        />
        <StoryBox
          backgroundImage="storythree-bg"
          title="18 Days Voyage"
          author="Alexei Borodin"
          date="April 11th 2020"
        />
        <StoryBox
          backgroundImage="storyfour-bg"
          title="Architecturals"
          author="Samantha Brooke"
          date="April 9th 2020"
        />
        <StoryBox
          backgroundImage="storyfive-bg"
          title="World Tour 2019"
          author="Timothy Wagner"
          date="April 7th 2020"
        />
        <StoryBox
          backgroundImage="storysix-bg"
          title="Unseen Corners"
          author="William Malcolm"
          date="April 3rd 2020"
        />
        <StoryBox
          backgroundImage="storyseven-bg"
          title="King of Africa: Part II"
          author="Tim Hillenburg"
          date="March 29th 2020"
        />
        <StoryBox
          backgroundImage="storyeight-bg"
          title="The Trip to Nowhere"
          author="Felicia Rourke"
          date="March 21st 2020"
        />
        <StoryBox
          backgroundImage="storynine-bg"
          title="Rage of The Sea"
          author="Mohammed Abdul"
          date="March 19th 2020"
        />
        <StoryBox
          backgroundImage="storyten-bg"
          title="Running Free"
          author="Michelle Obama"
          date="March 16th 2020"
        />
        <StoryBox
          backgroundImage="storyeleven-bg"
          title="Behnind the Waves"
          author="Lamarr Wilson"
          date="March 11th 2020"
        />
        <StoryBox
          backgroundImage="storytwelve-bg"
          title="Calm Waters"
          author="Samantha Brooke"
          date="March 9th 2020"
        />
        <StoryBox
          backgroundImage="storythirteen-bg"
          title="The Milky Way"
          author="Benjamin Cruz"
          date="March 5th 2020"
        />
        <StoryBox
          backgroundImage="storyfourteen-bg"
          title="Night at The Dark Forest"
          author="Mohammed Abdul"
          date="March 4th 2020"
        />
        <StoryBox
          backgroundImage="storyfifteen-bg"
          title="Somwarpet's Beauty"
          author="Michelle Obama"
          date="March 1st 2020"
        />
        <StoryBox
          backgroundImage="storysixteen-bg"
          title="Land of Dreams"
          author="William Malcolm"
          date="February 25th 2020"
        />
      </div>
    </main>
  );
}
