import React from "react";

const PurchaseSteps3 = () => {
  return (
    <div className="w-[622px] mx-auto">
      <div className="flex items-center justify-between gap-[16px]">
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-base text-success-light font-normal">
            خلاصه خرید
          </p>
          <img src="../src/assets/icons/Shopping-Progress-Check-emoji.svg" alt="checked" className="w-[18px]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-[2px] bg-success-light rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-base text-success-light font-normal">
            آدرس
          </p>
          <img src="../src/assets/icons/Shopping-Progress-Check-emoji.svg" alt="checked" className="w-[18px]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-[2px] bg-success-light rounded-full"></div>
        </div>
        <div className="flex flex-col items-center gap-[8px]">
          <p className="text-base text-success-light font-normal">
            ورود
          </p>
          <img src="../src/assets/icons/Shopping-Progress-Check-emoji.svg" alt="checked" className="w-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default PurchaseSteps3;