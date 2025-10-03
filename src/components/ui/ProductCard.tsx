import { BadgeSmall, BadgeBig } from "./Badge";
import ButtonFavorite from "./ButtonFavorite";

const ProductCardSmall = () => {
  return (
    <div className="font-yekan-bakh flex flex-col gap-4 w-[350px] h-[336px]">
      <div className="bg-neutral-light-600 w-[350px] h-[296px] rounded-lg relative dark:bg-neutral-dark-600">
        <ButtonFavorite />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-sans font-normal text-base text-primary-text-light dark:text-primary-text-dark">
          Apple iPad Pro 12.9-inch
        </span>
        <BadgeSmall />
      </div>
    </div>
  );
};

const ProductCardBig = () => {
  return (
    <div className="font-yekan-bakh flex flex-col gap-4 w-[404px] h-96">
      <div className="bg-neutral-light-600 w-[404px] h-[346px] rounded-lg relative dark:bg-neutral-dark-600">
        <ButtonFavorite />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-sans font-normal text-lg text-primary-text-light dark:text-primary-text-dark">
          Apple iPad Pro 12.9-inch
        </span>
        <BadgeBig />
      </div>
    </div>
  );
};

export { ProductCardSmall, ProductCardBig };
