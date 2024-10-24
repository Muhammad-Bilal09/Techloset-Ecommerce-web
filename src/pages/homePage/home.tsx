import HeroSection from "../../components/homeComponent/heroSection";
import Carousel from "../../components/homeComponent/carousel";
import PopularProduct from "../../components/homeComponent/popularProduct";
import Banner from "../../components/homeComponent/banner";
import FeatureProduct from "../../components/homeComponent/featureProduct";
import SponserOne from "../../components/homeComponent/sponserOne";
import Review from "../../components/homeComponent/review";
import SponserTwo from "../../components/homeComponent/sponserTwo";
import Blog from "../../components/homeComponent/blog";
import { useState } from "react";

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
