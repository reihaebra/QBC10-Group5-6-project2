import OrderRow from "./OrderRow";
import type { Order } from "../pages/OrderPage";

interface OrdersFrameProps {
  order: Order[];
}

const OrdersFrame = ({ order }: OrdersFrameProps) => {
  return (
    <div className="w-full overflow-x-auto font-yekan-bakh dark:text-[var(--color-primary-text-dark)]">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-input-light dark:border-[var(--color-input-dark)]">
            <th className="text-right font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              عکس
            </th>
            <th className="text-right font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              نام محصول
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              تاریخ
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              کاربر
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              قیمت نهایی (تومان)
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              پرداخت
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              ارسال
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)] pb-4">
              عملیات
            </th>
          </tr>
        </thead>

        <tbody>
          {order?.length > 0 ? (
            order.map((item) => (
              <OrderRow
                key={item._id as string}
                imageUrl={item.orderItems[0]?.image ?? ""}
                name={item.orderItems[0]?.name ?? ""}
                price={item.totalPrice.toLocaleString()}
                user={item.user?.username ?? ""}
                date={new Date(item.createdAt as string).toLocaleDateString(
                  "fa-IR"
                )}
                paymentStatus={item.isPaid ? "paid" : "unpaid"}
                transitionStatus={item.isDelivered ? "sent" : "unsent"}
                orderId={item._id}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className="text-center py-6 text-gray-500 dark:text-gray-400"
              >
                هیچ سفارشی یافت نشد
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersFrame;