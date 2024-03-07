import Grid from "./components/GridLayout/Grid";
import BannerImage from "./components/LandingPage/BannerImage";
import Title from "./components/LandingPage/Title";
import Parallax from "./components/ParallaxScroll/Parallax";

export default function Home() {
  return (
    <div className="">
      <Title />
      <BannerImage />
      <br />
      <br />
      <br />
      <Parallax />
      <Grid />
    </div>
  );
}
