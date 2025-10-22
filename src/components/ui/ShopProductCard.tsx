import { Link } from "react-router-dom";
import Badge from "./Badge";
import ButtonFavorite from "./ButtonFavorite";
import ButtonPrimary from "./ButtonPrimary";
import { shortText } from "../../../utils/shortText";

interface ShopProductCardProps {
  product: {
    _id: string;
    title: string;
    brand?: string;
    price: number | string;
    description?: string;
    imageUrl: string;
  };
  onAddToCart: () => void;
}

const ShopProductCard = ({ product, onAddToCart }: ShopProductCardProps) => {
  const { _id, title, brand, price, description, imageUrl } = product;

  return (
    <div
      className="relative font-yekan-bakh flex flex-col rounded-lg max-w-80 max-h-96 w-full 
    bg-card-light dark:bg-[var(--color-shop-card-dark)]"
    >
      <div className="absolute top-4 right-4 z-10">
        <ButtonFavorite
          title={title}
          price={price.toLocaleString("fa-IR")}
          imageUrl={imageUrl}
        />
      </div>
      <div className="h-1/2 relative">
        <Link to={`/user/shop/${_id}`}>
          <div className="w-full h-full overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full hover:scale-105 transition"
            />
          </div>
        </Link>
        <div className="absolute right-4 bottom-3">
          <Badge size="big">{brand}</Badge>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1 h-1/2">
        <div className="flex items-start justify-between pb-2">
          <span
            className="font-normal text-lg leading-7 text-primary-text-light 
          dark:text-[var(--color-primary-text-dark)]"
          >
            {shortText(title, 3)}
          </span>
          <span className="font-bold text-base leading-6 text-primary-main">
            {price.toLocaleString("fa-IR")} تومان
          </span>
        </div>
        <p className="font-normal text-base leading-6 text-secondary-light dark:text-[var(--color-secondary-dark)]">
          {shortText(description ?? "", 10)}
        </p>
        <div className="flex items-end justify-between pt-3 mt-auto">
          <Link to={`/user/shop/${_id}`}>
            <ButtonPrimary
              text="مشاهده بیشتر"
              iconSrc="/icons/left-arrow.svg"
              altText="left arrow"
            />
          </Link>
          <button
            onClick={onAddToCart}
            className="p-2 cursor-pointer hover:-rotate-6"
          >
            <img
              src="../../public/icons/add-to-cart-light.svg"
              alt="add to cart light"
              className="dark:hidden"
            />
            <img
              src="../../public/icons/add-to-cart-dark.svg"
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
