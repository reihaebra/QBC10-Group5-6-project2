import type { OrderItem } from "../../constants/order";

interface Props {
  orderItems: OrderItem[];
}

const formatMoney = (value: number) =>
  new Intl.NumberFormat("fa-IR").format(value) + " تومان";

const OrderItemsTableAPI: React.FC<Props> = ({ orderItems }) => (
  <section className="w-fit h-auto max-h-96 p-6 gap-2.5 border-2 border-input-light dark:border-[var(--color-input-dark)] rounded-lg">
    <table className="w-fit font-normal text-base">
      <thead className="border-b border-input-light dark:border-[var(--color-input-dark)]">
        <tr>
          <th className="py-2 text-right">عکس</th>
          <th className="py-2 text-right pl-48 pr-2">نام محصول</th>
          <th className="py-2 px-8 text-right">تعداد</th>
          <th className="py-2 px-8 text-right">قیمت</th>
          <th className="py-2 px-8 text-right w-fit">قیمت نهایی</th>
        </tr>
      </thead>
      <tbody>
        {orderItems.map(({ _id, image, name, qty, price }) => (
          <tr key={_id} className="align-middle hover:bg-gray-50">
            <td className="py-3">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded object-cover"
              />
            </td>
            <td className="pr-2 py-3">{name}</td>
            <td className="py-3 text-center">{qty}</td>
            <td className="py-3 text-center font-mono">{formatMoney(price)}</td>
            <td className="py-3 text-center font-mono font-bold">
              {formatMoney(price * qty)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default OrderItemsTableAPI;
