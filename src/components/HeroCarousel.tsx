import { useState } from "react";
import ShopProductCard from "./ui/ShopProductCard";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: "۱۰,۰۰۰ تومان",
      description:
        "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR با فناوری ProMotion و تراشه A16 Bionic است.",
      imageUrl: "./src/assets/images/iphone-14-pro.png",
    },
    {
      title: "Apple iPhone 15 Pro",
      brand: "Apple",
      price: "۱۲,۰۰۰ تومان",
      description:
        "نسخه جدید آیفون با طراحی تیتانیومی و قدرت پردازنده A17 Pro.",
      imageUrl: "./src/assets/images/iphone-15-pro.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="flex items-center justify-center relative">
      <button
        onClick={prevSlide}
        className="absolute right-0 z-10 p-3 text-white bg-black/30 rounded-full"
      >
        ‹
      </button>

      <ShopProductCard {...products[currentIndex]} onAddToCart={() => {}} />

      <button
        onClick={nextSlide}
        className="absolute left-0 z-10 p-3 text-white bg-black/30 rounded-full"
      >
        ›
      </button>
    </div>
  );
};

export default HeroCarousel;
