// OrderRow.tsx
import OrderRowButton from "./OrderRowButton";
import ButtonPrimary from "./ui/ButtonPrimary";
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
    <tr className="bg-surface-light  ">
      <td className="py-3 px-2 flex items-center gap-3">
        <figure className="w-16 h-16 overflow-hidden p-1 flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
      </td>
      <td>
        <p className="font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
          {name || "نام محصول"}
        </p>
      </td>

      <td className="text-center text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
        {date || "1402/02/01"}
      </td>
      <td className="text-center text-primary-text-light dark:text-[var(--color-primary-text-dark)]">{user || "کاربر"}</td>
      <td className="text-center text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
        {price || "0 تومان"}
      </td>

      <td className="text-center align-middle ">
        <OrderRowButton status={paymentStatus} />
      </td>

      <td className="text-center align-middle">
        <OrderRowButton status={transitionStatus} />
      </td>

      <td className="text-center align-middle">
        <div className="flex justify-center">
          <ButtonPrimary
            text={"جزییات"}
            handleClick={() => console.log("button info clicked")}
          />
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
