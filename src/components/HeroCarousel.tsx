import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ShopProductCard from "../components/ui/ShopProductCard";

const HeroCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const products = [
    {
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۵۰,۰۰۰,۰۰۰ تومان",
      description:
        "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است و از تراشه A16 Bionic بهره می‌برد.",
      imageUrl: "./src/assets/images/iphone-14-pro.png",
    },
    {
      title: "Apple iPhone 14",
      brand: "Apple",
      price: "۴۰,۰۰۰,۰۰۰ تومان",
      description:
        "آیفون 14 با صفحه نمایش 6.1 اینچی و طراحی زیبا، تجربه کاربری روانی ارائه می‌دهد.",
      imageUrl: "./src/assets/images/iphone-14.png",
    },
  ];

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* کروسل */}
      <div className="absolute left-10 w-163 h-175 z-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperInstance}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={16}
          slidesPerView={1}
          className="w-full h-full rounded-2xl overflow-hidden bg-neutral-light-600 dark:bg-neutral-dark-600"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ShopProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* دکمه قبلی */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-[-2px] -translate-y-1/2 z-20 bg-white dark:bg-neutral-dark-700 p-2 rounded-full  hover:scale-105 transition-transform"
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
        className="absolute top-1/2 left-175 -translate-y-1/2 z-20 bg-white dark:bg-neutral-dark-700 p-2 rounded-full hover:scale-105 transition-transform"
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
