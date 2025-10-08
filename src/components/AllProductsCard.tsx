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
    <div className="flex flex-row p-2 rounded-lg max-w-[672px] h-fit bg-card-light">
      <img src={imageUrl} alt={title} className="W-[160PX] h-[160px]" />
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <h2 className="pb-2 text-xl font-bold text-primary-text-light">
            {title}
          </h2>
          <p className="text-xs font-normal text-secondary-light">
            ۳۱ مرداد ۱۴۰۳
          </p>
        </div>
        <p className="pb-4 text-sm font-normal text-secondary-light ">
          {description}
        </p>
        <div className="flex flex-row justify-between">
          <ButtonPrimary
            text="مشاهده بیشتر"
            handleClick={handleClick}
            iconSrc="./src/assets/icons/left-arrow.svg"
          />
          <p className="text-base text-primary-text-light font-normal">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
