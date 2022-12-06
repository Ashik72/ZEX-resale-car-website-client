import React from "react";
// import Banner from "./Banner";
import Categories from "./Categories/Categories";
import AdvertiseProduct from "./AdvertiseProduct/AdvertiseProduct";
import Slider from "./Slider/Slider";
import CTA from "./CTA/CTA";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Categories></Categories>
      <AdvertiseProduct></AdvertiseProduct>
      <CTA></CTA>
    </div>
  );
};

export default Home;
