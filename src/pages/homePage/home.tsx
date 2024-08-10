import HeroSection from "../../components/Home/heroSection";
import Carousel from "../../components/Home/carousel";
import PopularProduct from "../../components/Home/popularProduct";
import Banner from "../../components/Home/banner";
import FeatureProduct from "../../components/Home/featureProduct";
import SponserOne from "../../components/Home/sponserOne";
import Review from "../../components/Home/review";
import SponserTwo from "../../components/Home/sponserTwo";
import Blog from "../../components/Home/blog";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Carousel />
      <PopularProduct />
      <Banner />
      <FeatureProduct />
      <SponserOne />
      <Review />
      <SponserTwo />
      <Blog />
    </>
  );
}
