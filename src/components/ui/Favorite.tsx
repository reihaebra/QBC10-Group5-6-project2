import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";

const Favorite: React.FC = () => {
  return (
    <>
        <div className="flex gap-8 p-6">
        <Sidebar />

        <div className="flex flex-col gap-6">
            <ProductCard
            size="big"
            title="Apple iPad Pro 12.9-inch"
            price="۱۰,۰۰۰ تومان"
            imageUrl="https://via.placeholder.com/404x346"
            />
            <ProductCard
            size="big"
            title="Samsung Galaxy Tab S8"
            price="۸,۵۰۰ تومان"
            imageUrl="https://via.placeholder.com/404x346"
            />
        </div>
        </div>
    </>
  );
};

export default Favorite;
