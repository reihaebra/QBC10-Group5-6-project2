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
        <div className="flex items-center justify-center py-0.5 px-2 max-w-24 max-h-5 rounded-3xl bg-primary-dark">
          <span className="font-normal leading-4 text-[11px] text-primary-lighter">
            ۱۰,۰۰۰ تومان
          </span>
        </div>
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
        <div className="flex items-center justify-center py-0.5 px-2.5 max-w-24 max-h-6 rounded-3xl bg-primary-dark">
          <span className="font-normal leading-5 text-xs text-primary-lighter">
            ۱۰,۰۰۰ تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export { ProductCardSmall, ProductCardBig };
