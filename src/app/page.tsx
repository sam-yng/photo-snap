import classNames from "classnames";
import heroOne from "../../public/assets/home/desktop/create-and-share.jpg";
import heroTwo from "../../public/assets/home/desktop/beautiful-stories.jpg";
import heroThree from "../../public/assets/home/desktop/designed-for-everyone.jpg";
import { TextBox } from "@/components/TextBox";
import { StoryBox } from "@/components/StoryBox";
import { Feature } from "@/components/Feature";
import featureOne from "../../public/assets/features/desktop/responsive.svg";
import featureTwo from "../../public/assets/features/desktop/no-limit.svg";
import featureThree from "../../public/assets/features/desktop/embed.svg";

const Home: React.FC = () => {
  return (
    <main>
      <TextBox
        imageSrc={heroOne}
        title="Create and share your photo stories."
        info="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        buttonText="GET AN INVITE"
        backgroundColor="bg-black"
      />
      <TextBox
        imageSrc={heroTwo}
        title="Beautiful stories every time"
        info="We provide design templates to ensure your stories look terrific. Easily add photos, text, embeded maps and media from other networks. Then share your story with everyone."
        buttonText="GET AN INVITE"
      />
      <TextBox
        imageSrc={heroThree}
        title="Designed for everyone"
        info="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        buttonText="VIEW THE STORIES"
      />
      <div className={classNames("flex", "flex-col", "md:flex-row", "w-full")}>
        <StoryBox
          backgroundImage="storyone-bg"
          title="The Mountains"
          author="John Appleseed"
        />
        <StoryBox
          backgroundImage="storytwo-bg"
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
        />
        <StoryBox
          backgroundImage="storythree-bg"
          title="18 Days Voyage"
          author="Alexei Borodin"
        />
        <StoryBox
          backgroundImage="storyfour-bg"
          title="Architecturals"
          author="Samantha Brooke"
        />
      </div>
      <article
        className={classNames("flex", "flex-col", "mb-20", "md:flex-row")}
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
      </article>
    </main>
  );
};

export default Home;
