import React from "react";
import HeroSection from "../components/HeroSection";
import SpecialProducts from "../components/SpecialProducts";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center bg-neutral-light-100 dark:bg-neutral-dark-100">
      {/* 🔹 بخش بالای صفحه */}
      <HeroSection />

      {/* 🔹 بخش محصولات ویژه */}
      <SpecialProducts />
    </main>
  );
};

export default HomePage;
