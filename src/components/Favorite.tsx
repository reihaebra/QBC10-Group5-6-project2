import ButtonPrimary from "./ui/ButtonPrimary";
import React from "react";
import Sidebar from "./ui/Sidebar";
import ProductCard from "./ui/ProductCard";
const Favorite: React.FC = () => {
  function handleButtonClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex gap-8 p-6">
        <Sidebar />

        <div className="flex flex-col gap-6">
          <ProductCard
            size="big"
            title="Apple ipad Pro 12.9-inch"
            price="۱۰,۰۰۰ تومان"
            imageUrl="https://api2.zoomit.ir/media/652cfef7eb21a6b54f4f8f13"
          />
          <ButtonPrimary
            altText=""
            iconSrc=""
            text="مشاهده بیشتر"
            handleClick={handleButtonClick}
          />
          <ProductCard
            size="big"
            title="Samsung Galaxy Tab S8"
            price="۸,۵۰۰ تومان"
            imageUrl="https://mastercall.sn/wp-content/uploads/2025/03/6494230_sd.jpg"
          />
          <ButtonPrimary
            altText=""
            iconSrc=""
            text="مشاهده بیشتر"
            handleClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export default Favorite;
