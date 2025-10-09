import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroProductCard from "../components/HeroProductCard";

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const products = [
    {
      title: "Apple iPhone 14 Pro",
      brand: "اپل",
      price: "۵۰,۰۰۰,۰۰۰ تومان",
      description:
        "آیفون 14 پرو دارای صفحه‌نمایش 6.1 اینچی Super Retina XDR و تراشه قدرتمند A16 Bionic است.",
      imageUrl: "../src/assets/images/iphone-14-pro.png",
      rating: "۵",
      reviews: "۴۲۰۲",
      stock: "۱۰",
      updatedAt: "چند لحظه قبل",
    },
    {
      title: "Apple iPhone 14",
      brand: "اپل",
      price: "۴۰,۰۰۰,۰۰۰ تومان",
      description:
        "آیفون 14 با طراحی زیبا و صفحه‌نمایش Super Retina XDR تجربه‌ای روان و دلپذیر ارائه می‌دهد.",
      imageUrl: "../src/assets/images/iphone-14-pro.png",
      rating: "۴.۸",
      reviews: "۳۵۸۰",
      stock: "۵",
      updatedAt: "۲ ساعت قبل",
    },
  ];

  // اتصال دکمه‌ها به Swiper
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative flex items-center justify-center w-full py-10">
      {/* کروسل */}
      <div className="absolute left-10 w-163 h-175 z-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperInstance}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          className="w-full h-full rounded-2xl overflow-hidden"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <HeroProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* دکمه قبلی */}
      <button
        ref={prevRef}
        className="absolute left-[-2px] top-1/2 -translate-y-1/2 z-20 p-2 rounded-full hover:scale-105 transition-transform"
      >
        <img
          src="./src/assets/icons/arrleft-light.svg"
          alt="prev"
          className="w-5 h-5 dark:hidden"
        />
        <img
          src="./src/assets/icons/arrleft-dark.svg"
          alt="prev dark"
          className="hidden w-5 h-5 dark:block"
        />
      </button>

      {/* دکمه بعدی */}
      <button
        ref={nextRef}
        className="absolute left-175 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full hover:scale-105 transition-transform"
      >
        <img
          src="./src/assets/icons/arrright-light.svg"
          alt="next"
          className="w-5 h-5 dark:hidden"
        />
        <img
          src="./src/assets/icons/arrright-dark.svg"
          alt="next dark"
          className="hidden w-5 h-5 dark:block"
        />
      </button>
    </div>
  );
};

export default HeroCarousel;
