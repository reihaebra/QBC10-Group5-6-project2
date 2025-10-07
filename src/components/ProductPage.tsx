import React from "react";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";

const ProductPage = () => {
  return (
    <>
      {/* top part of the page */}
      <Sidebar />
      <UserDropdown />
      <div>
        {/* productImage */}
        <div id="productImage">
          <img
            src="src/assets/images/mba13-midnight-select-202402.png"
            alt="productImage"
          />
        </div>
        {/* productDetail */}
        <div id="productDetail">
          <div>
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
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
