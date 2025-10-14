import React from "react";
import ProductCard from "./ui/ProductCard";
import ButtonSecondary from "./ui/ButtonSecondary";

const SpecialProducts = () => {
  const products = [
    { title: "Apple iPad Pro 12.9-inch", price: "۸,۰۰۰ تومان" },
    { title: "Apple iPad Pro 11-inch", price: "۶,۰۰۰ تومان" },
    { title: "Apple iPad Air", price: "۵,۵۰۰ تومان" },
    { title: "Apple iPad Mini", price: "۴,۵۰۰ تومان" },
    { title: "Apple Watch Ultra", price: "۹,۰۰۰ تومان" },
    { title: "Apple Watch SE", price: "۵,۰۰۰ تومان" },
    { title: "AirPods Pro 2", price: "۴,۰۰۰ تومان" },
    { title: "MacBook Pro 14-inch", price: "۲۰,۰۰۰ تومان" },
    { title: "MacBook Air M3", price: "۱۸,۰۰۰ تومان" },
  ];

  const visibleProducts = products.slice(0, 6);

  return (
    <div className="mt-8">
      {/* فاصله از راست برای عنوان */}
      <div className="flex justify-between items-center mx-[8px] my-1 pr-26">
        <h2 className="font-yekan-bakh text-xl font-semibold mb-4">
          محصولات ویژه
        </h2>
        <div className="my-3 pl-8">
          <ButtonSecondary
            text="فروشگاه"
            handleClick={() => console.log("رفتن به فروشگاه")}
          />
        </div>
      </div>

      {/* کارت‌ها به سمت راست و فاصله کمتر */}
      <div className="grid grid-cols-3 gap-3 justify-items-end pr-10 pl-10">
        {visibleProducts.map((p, i) => (
          <ProductCard
            key={i}
            {...p}
            size="big"
            imageUrl="./../../public/images/ipad.png"
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;

