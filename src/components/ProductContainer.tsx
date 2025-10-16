import ButtonPrimary from "./ui/ButtonPrimary";
import InventoryDropdown from "../components/ui/InventoryDropdown";
import ButtonFavorite from "./ui/ButtonFavorite";

import { useState } from "react";
import { getSingleProducts } from "../api/requests/singleProduct";

interface Reviews {
  name: string;
  rating: number | string;
  comment: string;
  user: number | string;
  _id: number | string;
  createdAt: number | string;
  updatedAt: string | number;
}

interface Product {
  id: number | string;
  name: string;
  image: string;
  quantity: number | string;
  description: string;
  rating: number | string;
  price: number | string;
  countInStock: number | string;
  reviews: Reviews[];
  category: string;
  createdAt: number | string;
  updatedAt: string | number;
  numReviews: string | number;
  __v: number;
}

const ProductContainer = () => {
  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async (id: number | string) => {
    try {
      const response = await getSingleProducts(id);
      if (!response.ok) {
        throw new Error("محصول مورد نظر یافت نشد!");
      }
      const data: any = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Erorr:", error);
    }
  };

  return (
    <div className="font-yekan-bakh flex gap-16 bg-background-base-light dark:bg-[var(--color-background-primary-dark)]">
      <div id="productImage" className="w-1/3 rounded-lg">
        <img
          src="../../public/images/mba13-midnight-select-202402.png"
          alt="productImage"
          className="w-3xl h-full object-cover rounded-lg"
        />
      </div>
      <div id="productIntroduce" className="flex flex-col gap-11 w-1/3 h-1/3">
        <h3 className="font-semibold text-2xl text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
          Apple MacBook Air M2
        </h3>
        <p className="text-[var(--color-primary-text-light)] font-normal text-base dark:text-[var(--color-primary-text-dark)]">
          مک بوک ایر با تراشه M2 دارای صفحه نمایش 13.6 اینچی رتینا است. تا 18
          ساعت عمر باتری و طراحی بدون فن.
        </p>
        <span className="text-3xl font-bold text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
          ۱۰,۰۰۰ تومان
        </span>
        <div id="productDetail" className="flex justify-between">
          <div
            id="rightcolumn"
            className="flex flex-col gap-4 font-normal text-base"
          >
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
            className="flex flex-col gap-4 font-normal text-base"
          >
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
            <div className="flex gap-2">
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
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
            ۵۰۰۰ نظر
            <div id="stars" className="flex items-center gap-1">
              <img
                src="../../public/icons/half-star-light.svg"
                alt="half-star-light"
                className="w-4 h-4 block dark:hidden"
              />
              <img
                src="../../public/icons/half-star-dark.svg"
                alt="half-star-dark"
                className="w-4 h-4 hidden dark:block"
              />
              <img
                src="../../public/icons/star-light.svg"
                alt="star-light"
                className="w-4 h-4 block dark:hidden"
              />
              <img
                src="../../public/icons/star-dark.svg"
                alt="star-dark"
                className="w-4 h-4 hidden dark:block"
              />
              <img
                src="../../public/icons/star-light.svg"
                alt="star-light"
                className="w-4 h-4 block dark:hidden"
              />
              <img
                src="../../public/icons/star-dark.svg"
                alt="star-dark"
                className="w-4 h-4 hidden dark:block"
              />
              <img
                src="../../public/icons/star-light.svg"
                alt="star-light"
                className="w-4 h-4 block dark:hidden"
              />
              <img
                src="../../public/icons/star-dark.svg"
                alt="star-dark"
                className="w-4 h-4 hidden dark:block"
              />
              <img
                src="../../public/icons/star-light.svg"
                alt="star-light"
                className="w-4 h-4 block dark:hidden"
              />
              <img
                src="../../public/icons/star-dark.svg"
                alt="star-dark"
                className="w-4 h-4 hidden dark:block"
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
      <div className="mr-60">
        <ButtonFavorite />
      </div>
    </div>
  );
};

export default ProductContainer;
