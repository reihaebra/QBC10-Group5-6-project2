import React from "react";
import { useTestData } from "./TestData";

const ir = (n: number) => `${n.toLocaleString("fa-IR")} تومان`;

const OrderSummary: React.FC = () => {
  const { subtotal, tax, shipping, total } = useTestData();
  const rate = 60000;

  return (
    <aside className="p-4 w-full">
      <h3 className="font-bold text-xl text-right mb-4">خلاصه خرید</h3>
      <div className="flex flex-col  gap-2 w-full font-bold text-base ">
        <div className="flex  justify-between">
          <span className="text-secondary-light">قیمت محصولات:</span>
          <span>{ir(Math.round(subtotal * rate))}</span>
        </div>
        <div className="flex justify-between py-2 ">
          <span className="text-secondary-light">هزینه ارسال:</span>
          <span>{ir(Math.round(shipping * rate))}</span>
        </div>
        <div className="flex justify-between py-2 ">
          <span className="text-secondary-light">مالیات :</span>
          <span>{ir(Math.round(tax * rate))}</span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-secondary-light">مبلغ نهایی:</span>
          <span>{ir(Math.round(total * rate))}</span>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary; 