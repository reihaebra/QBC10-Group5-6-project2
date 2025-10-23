import ButtonPrimary from "./ui/ButtonPrimary";
import { formatPersianDate } from "../../utils/persianDate";
import { shortText } from "../../utils/shortText";

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  createdAt: string;
}

const AllProductsCard: React.FC<ProductCardProps> = ({
  description,
  name,
  price,
  imageUrl,
  createdAt,
}) => {
  return (
    <div
      className="flex p-2 rounded-lg w-full max-w-xl h-44
      bg-card-light dark:bg-[var(--color-shop-card-dark)]"
    >
      <div className="max-w-[160px] max-h-[160px]">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="flex justify-between items-start pb-2">
          <h2 className="text-xl font-semibold text-primary-text-light dark:text-white">
            {shortText(name, 4)}
          </h2>
          <p className="text-xs font-normal text-secondary-light dark:text-[var(--color-secondary-dark)]">
            {formatPersianDate(createdAt)}
          </p>
        </div>

        <p className="text-sm font-normal text-secondary-light dark:text-[var(--color-secondary-dark)] leading-5">
          {shortText(description, 15)}
        </p>

        <div className="flex justify-between items-center pt-4">
          <ButtonPrimary
            text="مشاهده بیشتر"
            iconSrc="./../../public/icons/left-arrow.svg"
          />
          <p className="text-base leading-6 font-normal text-primary-text-light dark:text-white">
            {price} تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
