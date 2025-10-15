import ButtonPrimary from "./ui/ButtonPrimary";
import InventoryDropdown from "../components/ui/InventoryDropdown";

const ProductContainer = () => {
  return (
    <>
      <div className="flex flex-row gap-12  bg-background-base-light dark:bg-[var(--color-background-primary-dark)] font-yekan-bakh">
        <div id="productImage" className="w-1/3  mt-16">
          <img
            src="../../public/images/mba13-midnight-select-202402.png"
            alt="productImage"
            className="w-3xl h-full items-stretch object-cover"
          />
        </div>
        <div
          id="productIntroduce"
          className="flex flex-col gap-11 w-1/3 h-1/3 mt-16 pl-5 pr-5"
        >
          <div className="flex flex-row justify-between font-medium text-2xl text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
            <h3>Apple MacBook Air M2</h3>
          </div>
          <div className="text-[var(--color-primary-text-light)] font-normal text-[16px] dark:text-[var(--color-primary-text-dark)]">
            <p>
              مک بوک ایر با تراشه M2 دارای صفحه نمایش 13.6 اینچی رتینا است. تا
              18 ساعت عمر باتری و طراحی بدون فن.
            </p>
          </div>
          <div className="text-[var(--color-primary-text-light)]  dark:text-[var(--color-primary-text-dark)]">
            <span className="text-3xl font-bold">۱۰,۰۰۰ تومان</span>
          </div>
          <div id="productDetail" className="flex flex-row justify-between">
            <div
              id="rightcolumn"
              className="flex flex-col gap-3.5 font-normal text-base"
            >
              <div className="flex flex-row gap-2">
                <img
                  src="../../public/icons/star-light.svg"
                  alt="star-light"
                  className="block dark:hidden"
                />
                <img
                  src="../../public/icons/star-dark.svg"
                  alt="star-dark"
                  className="hidden dark:block"
                />
                <h6 className="text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]">
                  امتیاز :
                </h6>
                <h6>۵</h6>
              </div>
              <div className="flex flex-row gap-2">
                <img
                  src="../../public/icons/basket-number.svg"
                  alt="basket-number"
                  className="block dark:hidden"
                />
                <img
                  src="../../public/icons/basket-number-dark.svg"
                  alt="basket-number-dark"
                  className="hidden dark:block"
                />
                <h6 className="text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]">
                  تعداد :
                </h6>
                <h6>۵۲</h6>
              </div>
              <div className="flex flex-row gap-2">
                <img
                  src="../../public/icons/mojoodi.svg"
                  alt="mojoodi"
                  className="block dark:hidden"
                />
                <img
                  src="../../public/icons/mojoodi-dark.svg"
                  alt="mojoodi-dark"
                  className="hidden dark:block"
                />
                <h6 className="text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]">
                  موجودی :
                </h6>
                <h6>۱۰</h6>
              </div>
            </div>
            <div
              id="leftcolumn"
              className="flex flex-col gap-3.5 font-normal text-base"
            >
              <div className="flex flex-row gap-2">
                <img
                  src="../../public/icons/brand.svg"
                  alt="brand"
                  className="block dark:hidden"
                />
                <img
                  src="../../public/icons/brand-dark.svg"
                  alt="brand-dark"
                  className="hidden dark:block"
                />
                <h6 className="text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]">
                  برند :
                </h6>
                <h6>اپل</h6>
              </div>
              <div className="flex flex-row gap-2">
                <img
                  src="../../public/icons/clock.svg"
                  alt="clock"
                  className="block dark:hidden"
                />
                <img
                  src="../../public/icons/clock-dark.svg"
                  alt="clock-dark"
                  className="hidden dark:block"
                />
                <h6 className="text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]">
                  زمان بروزرسانی :
                </h6>
                <h6>چند لحظه قبل</h6>
              </div>
              <div className="flex flex-row gap-2">
                <img
                  src="../../public/icons/star-light.svg"
                  alt="star-light"
                  className="block dark:hidden"
                />
                <img
                  src="../../public/icons/star-dark.svg"
                  alt="star-dark"
                  className="hidden dark:block"
                />
                <h6 className="text-[var(--color-secondary-light)] dark:text-[var(--color-secondary-dark)]">
                  نظرات :
                </h6>
                <h6>۴۲۰۲</h6>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2 text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
              ۵۰۰۰ نظر
              <div id="stars" className="flex flex-row">
                <img
                  src="../../public/icons/half-star-light.svg"
                  alt="half-star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="../../public/icons/half-star-dark.svg"
                  alt="half-star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="../../public/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="../../public/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="../../public/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="../../public/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="../../public/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="../../public/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="../../public/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="../../public/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
              </div>
            </div>
            <div id="select-box" className="w-24 h-10">
              <InventoryDropdown />
            </div>
          </div>
          <div>
            <ButtonPrimary text="افزودن به سبد خرید" handleClick={() => {}} />
          </div>
        </div>
        <div id="favorite" className="mt-16 mr-64">
          <img
            src="/../../public/icons/favorite.svg"
            alt="favorite"
            className="block dark:hidden"
          />
          <img
            src="/../../public/icons/favorite-dark.svg"
            alt="favorite-dark"
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
