import HeroCarousel from "./HeroCarousel";
import SideCards from "./SideCards";

interface Product {
  _id: string;
  name: string;
  category: { name: string };
  price: number | string;
  description: string;
  image: string;
  rating?: number;
  numReviews?: number;
  countInStock?: number;
  updatedAt: string;
}

interface HeroSectionProps {
  heroProducts: Product[];
  sideProducts: Product[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroProducts,
  sideProducts,
}) => {
  return (
    <section className="flex flex-col xl:flex-row gap-10 items-center w-full mb-12">
      <SideCards products={sideProducts} />
      <HeroCarousel products={heroProducts} />
    </section>
  );
};

export default HeroSection;
