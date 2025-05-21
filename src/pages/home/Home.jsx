import Banner from "@/components/home/Banner";
import FeaturedGardeners from "@/components/home/FeaturedGardeners";
import Testimonials from "@/components/home/Testimonials";
import TrendingTips from "@/components/home/TrendingTips";
import React from "react";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedGardeners />
      <TrendingTips />
      <Testimonials />
    </>
  );
};

export default Home;
