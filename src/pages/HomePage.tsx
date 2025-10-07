import HeroCarousel from "../components/HeroCarousel";
import SideCards from "../components/SideCards";
import SpecialProducts from "../components/SpecialProducts";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-8 bg-neutral-dark-900">
      {/* بالای صفحه */}
      <div className="flex justify-between w-full max-w-[1400px]">
        <HeroCarousel />
        <SideCards />
      </div>

      {/* محصولات ویژه */}
      <SpecialProducts />
    </div>
  );
};

export default HomePage;
