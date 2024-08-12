import HeroSection from "../../components/heroSection";
import Carousel from "../../components/carousel";
import PopularProduct from "../../components/popularProduct";
import Banner from "../../components/banner";
import FeatureProduct from "../../components/featureProduct";
import SponserOne from "../../components/sponserOne";
import Review from "../../components/review";
import SponserTwo from "../../components/sponserTwo";
import Blog from "../../components/blog";

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
