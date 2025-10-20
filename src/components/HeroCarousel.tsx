import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroProductCard from "./HeroProductCard";

export interface Product {
  id: number;
  name: string;
  category: string; // ✅ حالا اجباریه
  price: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  countInStock: number;
  updatedAt: string;
}

interface HeroCarouselProps {
  products: Product[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ products }) => {
  return (
    <div className="relative flex items-center justify-center max-w-xl mx-auto w-full h-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        spaceBetween={16}
        slidesPerView={1}
        className="overflow-hidden"
      >
        {products.map((product: Product, index: number) => (
          <SwiperSlide key={index}>
            <HeroProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
