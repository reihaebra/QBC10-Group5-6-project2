import HeroCarousel from "../components/HeroCarousel";
import SideCards from "../components/SideCards";

const HeroSection = () => {
  return (
    <section className="flex gap-10 items-center w-full mb-12">
      <SideCards />
      <HeroCarousel />
    </section>
  );
};

export default HeroSection;
