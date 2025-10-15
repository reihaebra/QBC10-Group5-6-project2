import Badge from "./Badge";
import ButtonFavorite from "./ButtonFavorite";

interface ProductCardProps {
  size: "small" | "big";
  title: string;
  price: string;
  imageUrl: string;
}

const ProductCard = ({
  size = "small",
  title = "Apple iPad Pro 12.9-inch",
  price = "۱۰,۰۰۰ تومان",
  imageUrl = "",
}: ProductCardProps) => {
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
    <div
      className={`font-yekan-bakh flex flex-col gap-4 ${sizeStyles.container}`}
    >
      <div
        className={`bg-neutral-light-600 ${sizeStyles.imageContainer} rounded-lg overflow-hidden relative dark:bg-[var(--color-neutral-dark-600)]`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center rounded-lg"
          />
        ) : null}
        <ButtonFavorite />
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`font-sans font-normal ${sizeStyles.titleText} text-primary-text-light dark:text-[var(--color-primary-text-dark)]`}
        >
          {title}
        </span>
        <Badge size={sizeStyles.badgeSize}>{price}</Badge>
      </div>
    </div>
  );
};

export default ProductCard;
