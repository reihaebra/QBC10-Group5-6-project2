import { use } from "react";
import OrderRowButton from "./OrderRowButton";
type PaymentStatus = "paid" | "unpaid";
type TransitionStatus = "sent" | "pending" | "unsent";

interface OrderRowProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  user?: string;
  date?: string;
  paymentStatus?: PaymentStatus;
  transitionStatus?: TransitionStatus;
}

const OrderRow = ({
  imageUrl,
  name,
  price,
  user,
  date,
  paymentStatus = "unpaid",
  transitionStatus = "unsent",
}: OrderRowProps) => {
  return (
    <li className="flex gap-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <figure className="w-20 h-20 overflow-hidden p-2">
          <img src={imageUrl} alt="" className="w-16 h-16" />
        </figure>
        <p className="font-normal text-primary-text-light text-base w-[250px]">
          {name || "نام محصول"}
        </p>
      </div>
      <p className=" font-normal text-primary-text-light text-base w-20">
        {date || "1402/02/01"}
      </p>
      <p className=" font-normal text-primary-text-light text-base w-20">
        {user || "کاربر"}
      </p>
      <p className=" font-normal text-primary-text-light text-base w-20">
        {price || "0 تومان"}
      </p>
      <>{paymentStatus && <OrderRowButton status={paymentStatus} />}</>
      <>{transitionStatus && <OrderRowButton status={transitionStatus} />}</>
      <div className="flex gap-2.5 h-fit w-[100px] justify-center">
        <button className="rounded-lg py-2 px-3 bg-primary-main text-center font-normal text-on-primary-light h-9 my-auto ">
          جزییات
        </button>
      </div>
    </li>
  );
};

export default OrderRow;
