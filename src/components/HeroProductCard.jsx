import React from "react";

const HeroProductCard = ({
  imageUrl,
  title,
  brand,
  price,
  description,
  rating,
  reviews,
  stock,
  updatedAt,
}) => {
  return (
    <div className="font-yekan-bakh flex flex-col rounded-2xl overflow-hidden w-full shadow-sm">
      {/* تصویر محصول */}
      <div className="w-full flex justify-center bg-gray-100 p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-w-175 object-contain h-120"
        />
      </div>

      {/* بخش سه ستون */}
      <div className="flex w-full p-6 gap-6">
        {/* ستون اول – بزرگترین */}
        <div className="flex-1 min-w-[40%] flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg font-bold text-gray-900 text-left dark:text-white">
            {price}
          </p>
          <p className="text-gray-900 text-sm leading-relaxed dark:text-white">
            {description}
          </p>
        </div>

        {/* ستون دوم و سوم – در سه ردیف روبه‌روی هم */}
        <div className="flex flex-1 min-w-[40%] justify-between text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex flex-col gap-y-2">
            {/* ردیف اول */}
            <div className="flex items-center gap-2">
              <img
                src="../src/assets/icons/star-light.svg"
                alt="star"
                className="block dark:hidden"
              />
              <img
                src="../src/assets/icons/star-dark.svg"
                alt="star"
                className="hidden dark:block"
              />
              <span>
                امتیاز:{" "}
                <span className="text-black dark:text-white"> {rating}</span>{" "}
              </span>
            </div>

            {/* ردیف دوم */}
            <div className="flex items-center gap-2">
              <img
                src="../src/assets/icons/frame-light.svg"
                alt="count"
                className="block dark:hidden"
              />
              <img
                src="../src/assets/icons/frame-dark.svg"
                alt="count"
                className="hidden dark:block"
              />
              <span>
                تعداد:{" "}
                <span className="text-black dark:text-white"> {reviews}</span>
              </span>
            </div>

            {/* ردیف سوم */}
            <div className="flex items-center gap-2">
              <img
                src="../src/assets/icons/mojodi-light.svg"
                alt="stock"
                className="block dark:hidden"
              />
              <img
                src="../src/assets/icons/mojodi-dark.svg"
                alt="stock"
                className="hidden dark:block"
              />
              <span>
                موجودی:{" "}
                <span className=" text-black dark:text-white"> {stock}</span>{" "}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            {/* ردیف اول */}
            <div className="flex items-center gap-2">
              <img
                src="../src/assets/icons/brand-light.svg"
                alt="brand"
                className="block dark:hidden"
              />
              <img
                src="../src/assets/icons/brand-dark.svg"
                alt="brand"
                className="hidden dark:block"
              />
              <span>
                برند:{" "}
                <span className="text-black dark:text-white"> {brand}</span>
              </span>
            </div>

            {/* ردیف دوم */}
            <div className="flex items-center gap-2">
              <img
                src="../src/assets/icons/time-light.svg"
                alt="time"
                className="block dark:hidden"
              />
              <img
                src="../src/assets/icons/time-dark.svg"
                alt="time"
                className="hidden dark:block"
              />
              <span>
                بروزرسانی:{" "}
                <span className="text-black dark:text-white"> {updatedAt}</span>
              </span>
            </div>

            {/* ردیف سوم */}
            <div className="flex items-center gap-2">
              <img
                src="../src/assets/icons/star-light.svg"
                alt="reviews"
                className="block dark:hidden"
              />
              <img
                src="../src/assets/icons/star-dark.svg"
                alt="reviews"
                className="hidden dark:block"
              />
              <span>
                نظرات:{" "}
                <span className="text-black dark:text-white"> {reviews}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProductCard;
