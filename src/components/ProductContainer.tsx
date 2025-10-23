import ButtonPrimary from "./ui/ButtonPrimary";
import InventoryDropdown from "../components/ui/InventoryDropdown";
import ButtonFavorite from "./ui/ButtonFavorite";
import { useState } from "react";
import type { Product } from "../pages/ProductPage";
import { useCartContext } from "../context/useCartContext";

interface productCategory {
  _id: string | number;
  name: string;
  __v: string;
}

interface ProductContainerProps {
  product: Product;
  productCategory: productCategory | null;
}

const ProductContainer = ({
  product,
  productCategory,
}: ProductContainerProps) => {
  const { addToCart } = useCartContext()!;
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="font-yekan-bakh flex gap-16 bg-background-base-light dark:bg-[var(--color-background-primary-dark)]">
      <div id="productImage" className="w-1/3 rounded-lg">
        <img
          src={product?.image}
          alt="productImage"
          className="w-3xl h-full object-cover rounded-lg"
        />
      </div>
      <div id="productIntroduce" className="flex flex-col gap-11 w-1/3 h-1/3">
        <h3 className="font-semibold text-2xl text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
          {product?.name}
        </h3>
        <p className="text-[var(--color-primary-text-light)] font-normal text-base dark:text-[var(--color-primary-text-dark)]">
          {product?.description}
        </p>
        <span className="text-3xl font-bold text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
          {product?.price.toLocaleString()} تومان
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
              <h6>{Number(product?.rating).toFixed(2)}</h6>
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
              <h6>{product?.quantity}</h6>
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
              <h6>{product?.countInStock}</h6>
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
              <h6>{productCategory?.name}</h6>
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
              <h6>
                {new Date(product?.updatedAt).toLocaleDateString("fa-IR")}
              </h6>
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
              <h6>{product?.numReviews}</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
            {product?.numReviews} نظر
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
            <InventoryDropdown
              onChange={(value: number) => setQuantity(value)}
            />
          </div>
        </div>
        <div>
          <ButtonPrimary
            text="افزودن به سبد خرید"
            handleClick={() => {
              addToCart({
                id: product._id,
                title: product.name,
                price: Number(product.price),
                quantity: quantity,
                imageUrl: product.image,
                description: product.description,
              });
            }}
          />
        </div>
      </div>
      <div className="mr-60">
        <ButtonFavorite
          title={product?.name}
          price={product?.price.toString()}
          imageUrl={product?.image}
        />
      </div>
    </div>
  );
};

export default ProductContainer;
