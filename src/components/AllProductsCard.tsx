import ButtonPrimary from "./ui/ButtonPrimary";

interface ProductCardProps {
  description: string;
  title: string;
  price: string;
  imageUrl: string;
}
const handleClick: () => void = () => {
  console.log("Button clicked");
};
const AllProductsCard: React.FC<ProductCardProps> = ({
  description,
  title,
  price,
  imageUrl,
}) => {
  return (
    <div className="flex flex-row p-2 rounded-lg max-w-[672px] h-fit bg-card-light dark:bg-[var(--color-shop-card-dark)]">
      <img src={imageUrl} alt={title} className="W-[160PX] h-[160px]" />
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <h2 className="pb-2 text-xl font-normal text-primary-text-light dark:text-white">
            {title}
          </h2>
          <p className="text-xs font-normal text-secondary-light">
            ۳۱ مرداد ۱۴۰۳
          </p>
        </div>
        <p className="pb-4 text-sm font-normal text-secondary-light dark:text-[var(--color-secondary-dark)] ">
          {description}
        </p>
        <div className="flex flex-row justify-between">
          <ButtonPrimary
            text="مشاهده بیشتر"
            handleClick={handleClick}
            iconSrc="./../../public/icons/left-arrow.svg"
          />
          <p className="text-base text-primary-text-light font-normal dark:text-white">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
