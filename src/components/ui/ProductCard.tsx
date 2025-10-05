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
          container: "w-[404px] h-96",
          imageContainer: "w-[404px] h-[346px]",
          titleText: "text-lg",
          badgeSize: "big",
        }
      : {
          container: " w-[350px] h-[336px]",
          imageContainer: "w-[350px] h-[296px]",
          titleText: "text-base",
          badgeSize: "small",
        };

  return (
    <div
      className={`font-yekan-bakh flex flex-col gap-4 ${sizeStyles.container}`}
    >
      <div
        className={`bg-neutral-light-600 ${sizeStyles.imageContainer} rounded-lg relative dark:bg-neutral-dark-600`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : null}
        <ButtonFavorite />
      </div>
      <div className="flex items-center justify-between">
        <span
          className={`font-sans font-normal ${sizeStyles.titleText} text-primary-text-light dark:text-primary-text-dark`}
        >
          {title}
        </span>
        <Badge size="big">{price}</Badge>
      </div>
    </div>
  );
};

export default ProductCard;
