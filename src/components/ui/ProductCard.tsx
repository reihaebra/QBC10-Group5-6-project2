import { Link } from "react-router-dom";
import Badge from "./Badge";
import ButtonFavorite from "./ButtonFavorite";
import { shortText } from "../../../utils/shortText";

interface ProductCardProps {
  size: "small" | "big";
  product: {
    _id: string;
    name: string;
    category?: {
      name: string;
    };
    price: number | string;
    description?: string;
    image: string;
    rating?: number;
    numReviews?: number;
    countInStock?: number;
    updatedAt?: string;
  };
}

const ProductCard = ({ size, product }: ProductCardProps) => {
  const sizeStyles =
    size === "big"
      ? {
          container: "w-80 h-80",
          imageContainer: "w-80 h-72",
          titleText: "text-lg",
          badgeSize: "big",
        }
      : {
          container: "w-72 h-72",
          imageContainer: "w-72 h-64",
          titleText: "text-base",
          badgeSize: "small",
        };

  return (
    <Link to={`/user/shop/${product._id}`}>
      <div
        className={`font-yekan-bakh flex flex-col gap-4 ${sizeStyles.container}`}
      >
        <div
          className={`bg-neutral-light-600 ${sizeStyles.imageContainer} rounded-lg overflow-hidden relative dark:bg-[var(--color-neutral-dark-600)]`}
        >
          {product?.image ? (
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition"
            />
          ) : null}
          <div className="absolute top-4 right-4">
            <ButtonFavorite
              title={product.name}
              price={String(product.price)}
              imageUrl={product.image}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span
            className={`font-normal ${sizeStyles.titleText} text-primary-text-light dark:text-[var(--color-primary-text-dark)]`}
          >
            {product.name ? shortText(product.name, 4) : ""}
          </span>
          <Badge size={sizeStyles.badgeSize}>
            {product?.price
              ? Number(product.price).toLocaleString("fa-IR") + " تومان"
              : "—"}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
