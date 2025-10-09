import React from "react";
import ButtonFavorite from "./ButtonFavorite";
import ButtonMore from "./ButtonMore";

interface ShopProductCardProps {
  title: string;
  brand: string;
  price: string;
  description: string;
  imageUrl: string;
  onAddToCart: () => void;
}

const ShopProductCard = ({
  title,
  brand = "Apple",
  price = "۱۰,۰۰۰ تومان",
  description = "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی سوپر است نمایشگر Retina XDR ...",
  imageUrl = "./src/assets/images/iphone-14-pro.png",
  onAddToCart,
}: ShopProductCardProps) => {
  return (
    <div className="font-yekan-bakh flex flex-col rounded-lg max-w-96 bg-card-light dark:bg-shop-card-dark">
      <div className="relative">
        <ButtonFavorite />
        <img src={imageUrl} alt={title} />
        <div className="flex items-center justify-center py-0.5 px-2.5 max-w-12 max-h-6 rounded-3xl bg-primary-dark absolute right-4 bottom-3">
          <span className="font-normal leading-5 text-xs text-primary-lighter">
            {brand}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between pb-2">
          <span className="font-sans font-normal text-xl leading-7 text-primary-text-light dark:text-primary-text-dark">
            {title}
          </span>
          <span className="font-bold text-base leading-6 text-primary-main">
            {price}
          </span>
        </div>
        <p className="font-normal text-base leading-6 text-secondary-light dark:text-secondary-dark">
          {description}
        </p>
        <div className="flex items-end justify-between pt-3 w-full h-full">
          <ButtonMore />
          <button onClick={onAddToCart} className="p-2 cursor-pointer">
            <img
              src="./src/assets/icons/add-to-cart-light.svg"
              alt="add to cart light"
              className="dark:hidden"
            />
            <img
              src="./src/assets/icons/add-to-cart-dark.svg"
              alt="add to cart dark"
              className="hidden dark:block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
