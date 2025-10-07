import React from "react";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";

const ProductPage = () => {
  return (
    <>
      {/* top part of the page */}
      <div className="flex flex-row gap-10  bg-background-base-light">
        <div id="side">
          <Sidebar />
          <UserDropdown />
        </div>
        {/* productImage */}
        <div
          id="productImage"
          className="max-w-1/2 h-1/6  mt-16 border border-red-600"
        >
          <img
            src="src/assets/images/mba13-midnight-select-202402.png"
            alt="productImage"
            className="w-full h-full"
          />
        </div>
        {/* productIntroduce */}
        <div
          id="productIntroduce"
          className="flex flex-col gap-8 max-w-1/2 h-2/6 mt-16 p-5 border border-red-600"
        >
          <div className="flex flex-row justify-between">
            <h3>Apple MacBook Air M2</h3>
            <img src="/src/assets/icons/favorite.svg" alt="favorite" />
          </div>
          <div>
            <p>
              مک بوک ایر با تراشه M2 دارای صفحه نمایش 13.6 اینچی رتینا است. تا
              18 ساعت عمر باتری و طراحی بدون فن.
            </p>
          </div>
          <div>
            <h1>۱۰,۰۰۰ تومان</h1>
          </div>
          {/* productDetail */}
          <div
            id="productDetail"
            className="flex flex-row justify-between border border-red-600"
          >
            <div id="rightcolumn" className="flex flex-col gap-3.5">
              <div className="flex flex-row gap-2">
                <img src="src/assets/icons/star-light.svg" alt="star-light" />
                امتیاز : ۵
              </div>
              <div className="flex flex-row gap-2">
                <img
                  src="src/assets/icons/basket-number.svg"
                  alt="basket-number"
                />
                تعداد : ۵۲
              </div>
              <div className="flex flex-row gap-2">
                <img src="src/assets/icons/mojoodi.svg" alt="mojoodi" />
                موجودی : ۱۰
              </div>
            </div>
            <div id="leftcolumn" className="flex flex-col gap-3.5">
              <div className="flex flex-row gap-2">
                <img src="src/assets/icons/brand.svg" alt="brand" />
                برند : اپل
              </div>
              <div className="flex flex-row gap-2">
                <img src="src/assets/icons/clock.svg" alt="clock" />
                زمان بروزرسانی : چند لحظه قبل
              </div>
              <div className="flex flex-row gap-2">
                <img src="src/assets/icons/star-light.svg" alt="star-light" />
                نظرات : ۴۲۰۲
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between border border-red-600">
            <div className="flex flex-row items-center gap-2">
              ۵۰۰۰ نظر
              <div id="stars" className="flex flex-row">
                <img
                  src="src/assets/icons/half-star-light.svg"
                  alt="half-star-light"
                  className="max-w-4"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4"
                />
              </div>
            </div>
            <div id="select-box" className="w-24 h-10">
              <select
                name=""
                id=""
                className="select selected-boarder w-full max-w-xs"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div className="border border-red-600">
            <button className="bg-primary-lighter">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
