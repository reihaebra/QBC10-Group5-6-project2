import React from "react";

export const PurchaseSteps2 = () => {
  return (
    <div className="w-155 mx-auto font-yekan-bakh">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-base text-black dark:text-white font-normal">
            خلاصه خرید
          </p>
        </div>
        <div className="flex-1 mx-4">
          <div className="h-0.5 bg-success-light rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-base text-success-light font-normal">آدرس</p>
          <img
            src="../../../public/icons/Shopping-Progress-Check-emoji.svg"
            alt="checked"
            className="w-4.5"
          />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-0.5 bg-success-light rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-base text-success-light font-normal">ورود</p>
          <img
            src="../../../public/icons/Shopping-Progress-Check-emoji.svg"
            alt="checked"
            className="w-4.5"
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseSteps2;
