import { useState } from "react";
import { makeOrderPaid, makeOrderDelivered } from "../api/requests/ordersList";
import { toast } from "react-hot-toast";

type PaymentStatus = "paid" | "unpaid";
type TransitionStatus = "sent" | "pending" | "unsent";

interface OrderRowButtonProps {
  status: PaymentStatus | TransitionStatus;
  type: "payment" | "delivery";
  orderId: string;
  onStatusUpdate: () => void; 
}

const OrderRowButton = ({ 
  status, 
  type, 
  orderId, 
  onStatusUpdate 
}: OrderRowButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (status === "paid" || status === "sent") return;

    setLoading(true);
    try {
      if (type === "payment") {
        await makeOrderPaid(orderId);
        toast.success("پرداخت تأیید شد ✅");
      } else {
        await makeOrderDelivered(orderId);
        toast.success("سفارش ارسال شد ✅");
      }
      onStatusUpdate(); 
    } catch (error) {
      console.error("API Error:", error);
      toast.error("خطا در به‌روزرسانی");
    } finally {
      setLoading(false);
    }
  };

  const bgColorClass =
    status === "paid" || status === "sent"
      ? "bg-success-light" 
      : status === "unpaid" || status === "unsent"
      ? "bg-error-light hover:bg-red-500 cursor-pointer" 
      : "bg-info-light cursor-pointer"; 

  const textColorClass =
    status === "paid" || status === "sent"
      ? "text-order-paid-text"
      : status === "unpaid" || status === "unsent"
      ? "text-order-unpaid-text"
      : "text-order-pending-text";

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
        onClick={handleClick}
        disabled={loading}
        className={`rounded-xl px-2 py-0.5 flex items-center justify-center ${bgColorClass} disabled:opacity-50 transition-all`}
      >
        <p className={`font-normal text-sm ${textColorClass}`}>
          {loading ? "..." : text}
        </p>
      </button>
    </div>
  );
};

export default OrderRowButton;