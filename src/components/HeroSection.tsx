import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SideCards from "../components/SideCards";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        flex 
        justify-between 
        items-center 
        w-full
        max-w-[1600px]
        min-w-[1024px]
        mx-auto
        mt-8
        px-4
      "
    >
      <div className="relative -ml-12 z-20 w-[40%]">
        <SideCards />
      </div>
      {/* کروسل */}
      <div className="relative z-10 w-[58%]">
        <HeroCarousel />
      </div>
    </section>
  );
};

export default HeroSection;
