import HeroCarousel from "../components/HeroCarousel";
import SideCards from "../components/SideCards";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center w-full pt-4 pl-16 pr-40 mb-12">
      <SideCards />
      <HeroCarousel />
    </section>
  );
};

export default HeroSection;
