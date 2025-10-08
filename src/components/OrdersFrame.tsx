import OrderRow from "./OrderRow";
import data from "../../constants/orders-sample";
const OrdersFrame = () => {
  return (
    <ul className="flex flex-col gap-6 h-fit font-yekan-bakh">
      <li className="flex gap-4 justify-between border-b border-b-input-light pb-4">
        <div className="flex gap-4 w-[346px]">
          <p className="font-normal text-primary-text-light text-base w-20">
            عکس
          </p>
          <p className="font-normal text-primary-text-light text-base w-20 ">
            نام محصول
          </p>
        </div>
        <p className="font-normal text-primary-text-light text-base w-20">
          تاریخ
        </p>
        <p className="font-normal text-primary-text-light text-base  w-20">
          کاربر
        </p>
        <p className="font-normal text-primary-text-light text-base ">
          قیمت نهایی
        </p>
        <p className="font-normal text-primary-text-light text-base  w-20">
          پرداخت
        </p>
        <p className="font-normal text-primary-text-light text-base  w-20">
          ارسال
        </p>
        <p className="font-normal text-primary-text-light text-base  w-20">
          عملیات
        </p>
      </li>
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
    </ul>
  );
};

export default OrdersFrame;
