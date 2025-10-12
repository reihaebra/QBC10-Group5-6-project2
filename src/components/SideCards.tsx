import React from "react";
import ProductCard from "../components/ui/ProductCard";

const SideCards = () => {
  const products = [
    {
      title: "Apple iPad Pro 12.9-inch",
      price: "۴۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./src/assets/images/ipad-pro.png",
    },
    {
      title: "Apple iPad Air 10.9-inch",
      price: "۳۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./src/assets/images/ipad-air.png",
    },
    {
      title: "Apple iPad Mini",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./src/assets/images/ipad-mini.png",
    },
    {
      title: "Apple Watch Ultra 2",
      price: "۵۵,۰۰۰,۰۰۰ تومان",
      imageUrl: "./src/assets/images/apple-watch-ultra.png",
    },
  ];

  return (
    <div className="w-184 h-176 flex flex-col gap-8">
      <div className="flex gap-4">
        <ProductCard
          size="small"
          title={products[0].title}
          price={products[0].price}
          imageUrl={products[0].imageUrl}
        />
        <ProductCard
          size="small"
          title={products[1].title}
          price={products[1].price}
          imageUrl={products[1].imageUrl}
        />
      </div>
      <div className="flex gap-4">
        <ProductCard
          size="small"
          title={products[2].title}
          price={products[2].price}
          imageUrl={products[2].imageUrl}
        />
        <ProductCard
          size="small"
          title={products[3].title}
          price={products[3].price}
          imageUrl={products[3].imageUrl}
        />
      </div>
    </div>
  );
};

export default SideCards;
