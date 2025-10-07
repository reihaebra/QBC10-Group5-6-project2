import React from "react";
interface ShopPageButton {
  children: React.ReactNode;
}
const ShopPage_button: React.FC<ShopPageButton> = ({ children }) => {
  return (
    <button className="w-60 px-[65px] max-h-10 py-2 text-center bg-on-primary-light text-black rounded-[9999px] text-[16px] cursor-pointer">
      {children}
    </button>
  );
};

export default ShopPage_button;
