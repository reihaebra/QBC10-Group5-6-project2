import ButtonSecondary from "./ui/ButtonSecondary";
import { createOrder } from "../api/requests/createOrder";
import { useState } from "react";
import type { OrderData } from "../api/requests/createOrder";
import { useCartContext } from "../context/useCartContext";
import type { OrderItem } from "../api/requests/createOrder";
import { Navigate, useNavigate } from "react-router-dom";

interface SummaryProps {
  address: string;
  city: string;
  country: string;
  postal: string;
  sum: number;
}

const SummarySection = (props: SummaryProps) => {
  const { address, city, country, postal, sum } = props;

  const { cart } = useCartContext()!;
  const newCart: OrderItem[] = cart.map((item) => {
    return {
      _id: item.id,
      name: item.title,
      qty: item.quantity!,
    };
  });

  const tax = 0.1 * sum;

  const [orderData, setOrderData] = useState<OrderData>({
    orderItems: newCart,
    paymentMethod: "Cash",
    shippingAddress: { address: address, city: city, postalCode: postal },
  });

  function handleClick(): void {
    const sendData = async () => {
      console.log("orderData:", JSON.stringify(orderData, null, 2));
      const response = await createOrder(orderData);
      console.log(response);
    };
    sendData();
    const navigate = useNavigate();
    navigate("/user/my-orders");
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-medium text-right text-2xl text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
        خلاصه خرید
      </h2>

      <section className="bg-base-side-light dark:bg-[var(--color-base-side-dark)] rounded-lg p-6 space-y-6 flex justify-between text-right">
        <div className="p-4 flex-1 max-w-63 flex-col gap-4">
          <h3 className="mb-2 font-medium text-2xl text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
            روش پرداخت
          </h3>
          <p className="text-base text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
            <span className="text-secondary-light dark:text-[var(--color-secondary-dark)]">
              روش:
            </span>
            درگاه پرداخت پاسارگاد
          </p>
        </div>
        <div className="p-4 flex-1 flex-col gap-4 max-w-66">
          <h3 className="mb-2 font-medium text-2xl text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
            آدرس دریافت
          </h3>
          <p className="text-base text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
            <span className="text-secondary-light dark:text-[var(--color-secondary-dark)]">
              آدرس:
            </span>
            {country}، {city}، {address}، کدپستی: {postal}
          </p>
        </div>
        <div className="p-4 text-right flex-1 flex-col gap-1 max-w-75">
          <div className="flex justify-between">
            <p className="font-bold text-base text-secondary-light dark:text-[var(--color-secondary-dark)]">
              قیمت محصولات:
            </p>
            <p className="font-normal text-base text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
              {sum.toLocaleString("fa-IR")} تومان
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-base text-secondary-light dark:text-[var(--color-secondary-dark)]">
              هزینه ارسال:
            </p>
            <p className="font-normal text-base text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
              10,000 تومان
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-base text-secondary-light dark:text-[var(--color-secondary-dark)]">
              مالیات:
            </p>
            <p className="font-normal text-base text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
              {tax.toLocaleString("fa-IR")} تومان
            </p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-base text-secondary-light dark:text-[var(--color-secondary-dark)]">
              مبلغ نهایی:
            </p>
            <p className="font-normal text-base text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
              {(tax + sum).toLocaleString("fa-IR")} تومان
            </p>
          </div>
        </div>
      </section>

      <ButtonSecondary text="ثبت سفارش" handleClick={handleClick} />
    </div>
  );
};

export default SummarySection;
