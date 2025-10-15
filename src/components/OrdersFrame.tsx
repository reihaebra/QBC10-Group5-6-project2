import OrderRow from "./OrderRow";
import data from "../../constants/orders-sample";

const OrdersFrame = () => {
  return (
    <div className="w-full overflow-x-auto font-yekan-bakh dark:text-[var(--color-primary-text-dark)]">
      <table className="min-w-full border-collapse ">
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
          {data.map((item) => (
            <OrderRow
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              user={item.user}
              date={item.date}
              paymentStatus={item.paymentStatus}
              transitionStatus={item.transitionStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersFrame;
