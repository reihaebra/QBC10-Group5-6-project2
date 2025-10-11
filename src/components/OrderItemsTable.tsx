import React from "react";
import { useTestData } from "./TestData";

// 💰 Format number to USD currency
const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const OrderItemsTable: React.FC = () => {
  const { items } = useTestData();
  return (
    <section
      aria-label="جدول محصولات"
      className=" w-full h-auto max-h-96  p-6  gap-2.5  border-2 border-input-light  dark:border-input-dark"
    >
      <table className="w-full font-normal text-base flex-col">
        {/* --- Table Header --- */}
        <thead className="border-b border-input-light dark:border-input-dark">
          <tr>
            <th className="py-2 text-right">عکس</th>
            <th className="py-2 text-right">نام محصول</th>
            <th className="py-2 text-center">تعداد</th>
            <th className="py-2 text-right">قیمت</th>
            <th className="py-2 text-right">قیمت نهایی</th>
          </tr>
        </thead>

        {/* --- Table Body --- */}
        <tbody>
          {items.map(({ id, image, name, qty, price }) => (
            <tr key={id} className="align-middle">
              <td className="py-3">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 rounded border border-gray-200 dark:border-slate-600 object-cover"
                />
              </td>
              <td>{name}</td>
              <td className="text-center">{qty}</td>
              <td className="font-sans">{formatMoney(price)}</td>
              <td className="font-sans">{formatMoney(price * qty)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrderItemsTable; 
