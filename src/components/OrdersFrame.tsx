// OrdersFrame.tsx
import OrderRow from "./OrderRow";
import data from "../../constants/orders-sample";

const OrdersFrame = () => {
  return (
    <div className="w-full overflow-x-auto font-yekan-bakh">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-input-light bg-surface-light">
             <th className="text-right font-normal text-primary-text-light text-base py-3 px-2 w-20">
              عکس
            </th>
            <th className="text-right font-normal text-primary-text-light text-base py-3 px-2 w-50">
              نام محصول
            </th>
            <th className="text-center font-normal text-primary-text-light text-base">
              تاریخ
            </th>
            <th className="text-center font-normal text-primary-text-light text-base">
              کاربر
            </th>
            <th className="text-center font-normal text-primary-text-light text-base">
              قیمت نهایی
            </th>
            <th className="text-center font-normal text-primary-text-light text-base">
              پرداخت
            </th>
            <th className="text-center font-normal text-primary-text-light text-base">
              ارسال
            </th>
            <th className="text-center font-normal text-primary-text-light text-base">
              سعملیات
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
