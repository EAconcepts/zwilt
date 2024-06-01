import React from "react";
import Hero from "./components/Hero";
import graidentBg from "./assets/gradient-bg.png";
import Explore from "./components/Explore";
import HowItWorked from "./components/HowItWorked";
import Screening from "./components/Screening";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Gradient */}
      <div className="mt-[82px]">
        <img src={graidentBg} className="" />
      </div>
      <Explore />
      <HowItWorked />
      <Screening />
    </div>
  );
};

export default Home;
