import HeroSection from "./heroSection";
import Carousel from "./carousel";
import PopularProduct from "./popularProduct";
import Banner from "./banner";
import FeatureProduct from "./featureProduct";
import Sponser1 from "./sponser1";
import Review from "./review";
import Sponser2 from "./sponser2";
import Blog from "./blog";

export default function Home() {

  return (
    <>
      <HeroSection />
      <Carousel />
      <PopularProduct />
      <Banner />
      <FeatureProduct />
      <Sponser1 />
      <Review />
      <Sponser2 />
      <Blog />
    </>
  );
}
