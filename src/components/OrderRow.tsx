import { Link } from "react-router-dom";
import OrderRowButton from "./OrderRowButton";
import ButtonPrimary from "./ui/ButtonPrimary";
import { useState } from "react";
import {
  deliverOrderAPI,
  payOrderَAPI,
} from "../api/requests/updateStatusOrder";

type PaymentStatus = "paid" | "unpaid";
type TransitionStatus = "sent" | "pending" | "unsent";

interface OrderRowProps {
  imageUrl: string;
  name: string;
  price: string;
  user: string;
  date: string;
  paymentStatus: PaymentStatus;
  transitionStatus: TransitionStatus;
  orderId: string | number;
}

const OrderRow = ({
  imageUrl,
  name,
  price,
  user,
  date,
  paymentStatus = "unpaid",
  transitionStatus = "unsent",
  orderId,
}: OrderRowProps) => {
  const [paymentstate, setpayment] = useState(paymentStatus);
  const [transitionstate, settransition] = useState(transitionStatus);
  const isAdmin = localStorage.getItem("isAdmin");
  const handlePaid = async () => {
    if (isAdmin === "true") {
      try {
        const res = await payOrderَAPI(orderId.toString());
        if (res.status === 200) {
          setpayment("paid");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleTransition = async () => {
    if (isAdmin === "true") {
      try {
        const res = await deliverOrderAPI(orderId.toString());
        if (res.status === 200) {
          settransition("sent");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <tr className="bg-surface-light">
      <td className="py-2 flex items-center gap-3">
        <figure className="w-16 h-16 overflow-hidden p-1">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </figure>
      </td>
      <td>
        <p className="text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] max-w-36">
          {name || "نام محصول"}
        </p>
      </td>

      <td className="text-center text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
        {date || "1402/02/01"}
      </td>
      <td className="text-center text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
        {user || "کاربر"}
      </td>
      <td className="text-center text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
        {price || "0 تومان"}
      </td>

      <td className="text-center align-middle ">
        <OrderRowButton status={paymentstate} onclick={handlePaid} />
      </td>

      <td className="text-center align-middle">
        <OrderRowButton status={transitionstate} onclick={handleTransition} />
      </td>

      <td className="text-center align-middle">
        <div className="flex justify-center">
          <Link to={`/admin/orders/${orderId}`}>
            <ButtonPrimary text={"جزئیات"} />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
