type PaymentStatus = "paid" | "unpaid";
type TransitionStatus = "sent" | "pending" | "unsent";

interface OrderRowButtonProps {
  status: PaymentStatus | TransitionStatus;
}

const OrderRowButton = ({ status }: OrderRowButtonProps) => {
  const bgColorClass =
    status === "paid" || status === "sent"
      ? "bg-success-light"
      : status === "unpaid" || status === "unsent"
      ? "bg-error-light" 
      : "bg-info-light";

  const textColorClass =
    status === "paid"  || status === "sent"
      ? "text-[#D3FCD2]"
      : status === "unpaid"  || status === "unsent"
      ? "text-[#FFE9D5]"
      : "text-[#CAFDF5]";

  const text =
    status === "paid"
      ? "پرداخت شده"
      : status === "unpaid"
      ? "پرداخت نشده"
      : status === "sent"
      ? "ارسال شده"
      : status === "unsent" 
      ? "ارسال نشده"
      : "در حال ارسال";

  return (
    <div className="flex gap-2.5 h-fit w-fit justify-center mx-auto">
      <button
        className={`rounded-xl px-2 py-0.5 flex items-center justify-center  ${bgColorClass}`}
      >
        <p className={`font-normal text-sm ${textColorClass}`}>{text}</p>
      </button>
    </div>
  );
};

export default OrderRowButton;
