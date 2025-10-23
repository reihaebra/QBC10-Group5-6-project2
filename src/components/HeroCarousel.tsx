import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroProductCard from "./HeroProductCard";

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
interface HeroCarouselProps {
  products: Product[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ products }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative flex items-center justify-end max-w-xl mx-auto w-full h-full self-start">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperInstance}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          className="overflow-hidden"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <HeroProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button
        ref={prevRef}
        className="absolute -left-8 top-1/2 -translate-y-1/2 p-0 rounded-full hover:scale-105 transition-transform cursor-pointer"
      >
        <img
          src="../../public/icons/arrleft-light.svg"
          alt="prev"
          className="w-5 h-5 dark:hidden"
        />
        <img
          src="../../public/icons/arrleft-dark.svg"
          alt="prev dark"
          className="hidden w-5 h-5 dark:block"
        />
      </button>
      <button
        ref={nextRef}
        className="absolute -right-8 top-1/2 -translate-y-1/2 p-0 rounded-full 
        hover:scale-105 transition-transform cursor-pointer"
      >
        <img
          src="../../public/icons/arrright-light.svg"
          alt="next"
          className="w-5 h-5 dark:hidden"
        />
        <img
          src="../../public/icons/arrright-dark.svg"
          alt="next dark"
          className="hidden w-5 h-5 dark:block"
        />
      </button>
    </div>
  );
};

export default HeroCarousel;
