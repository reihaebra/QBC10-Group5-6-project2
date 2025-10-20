import HeroCarousel from "../components/HeroCarousel";
import SideCards from "../components/SideCards";

export interface Product {
  id: number;
  name: string;
  category?: string;
  price: string;
  description?: string;
  image: string; // ✅ اجباری شد
  rating?: number;
  reviews?: number;
  countInStock?: number;
  updatedAt?: string;
}

interface HeroSectionProps {
  heroProducts: Product[];
  sideProducts: Product[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroProducts, sideProducts }) => {
  return (
    <section className="flex flex-col xl:flex-row gap-10 items-center w-full mb-12">
      <SideCards products={sideProducts} />
      <HeroCarousel products={heroProducts} />
    </section>
  );
};

export default HeroSection;
