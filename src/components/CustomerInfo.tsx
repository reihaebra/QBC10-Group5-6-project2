import React from "react";
import { Address } from "../../constants/TestData";

interface CustomerInfoProps {
  data: Address;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ data }) => {
  return (
    <div className="w-lg">
      <h2 className="font-bold text-xl text-right mb-3">آدرس دریافت</h2>

      <div className="flex flex-col justify-between items-start gap-4 text-base leading-relaxed">
        <div className="flex items-center gap-3">
          <span className="font-bold text-primary-main ">شماره سفارش:</span>
          <span className="font-normal text-primary-text-light dark:text-[var(--color-on-primary-light)]">
            {data.phone}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-bold text-primary-main">نام:</span>
          <span className="font-normal text-primary-text-light dark:text-[var(--color-on-primary-light)]">
            {data.fullName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-bold text-primary-main ">ایمیل:</span>
          <span className="font-normal text-primary-text-light dark:text-[var(--color-on-primary-light)]">
            {data.email}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <span className="font-bold text-primary-main ">آدرس:</span>
          <span className="font-normal text-primary-text-light dark:text-[var(--color-on-primary-light)]">
            {data.address}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-bold text-primary-main ">روش پرداخت:</span>
          <span className="font-normal text-primary-text-light dark:text-[var(--color-on-primary-light)]">
            {data.payment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
