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
            <th className="text-right font-normal text-primary-text-light text-base py-3 px-2 w-20 dark:text-[var(--color-primary-text-dark)]">
              عکس
            </th>
            <th className="text-right font-normal text-primary-text-light text-base py-3 px-2 w-50 dark:text-[var(--color-primary-text-dark)]">
              نام محصول
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
              تاریخ
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
              کاربر
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
              قیمت نهایی
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
              پرداخت
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
              ارسال
            </th>
            <th className="text-center font-normal text-primary-text-light text-base dark:text-[var(--color-primary-text-dark)]">
              عملیات
            </th>
          </tr>
        </thead>

        <tbody>
          {order?.length > 0 ? (
            order.map((item) => (
              <OrderRow
                key={item._id}
                imageUrl={item.orderItems[0]?.image ?? ""}
                name={item.orderItems[0]?.name ?? ""}
                price={item.totalPrice.toLocaleString()}
                user={item.user?.username}
                date={new Date(item.createdAt).toLocaleDateString("fa-IR")}
                paymentStatus={item.isPaid ? "paid" : "unpaid"}
                transitionStatus={item.isDelivered ? "sent" : "unsent"}
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
