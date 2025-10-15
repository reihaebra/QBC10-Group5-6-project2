import { useTestData } from "./TestData";

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
      className=" w-fit h-auto max-h-96  p-6  gap-2.5  border-2 border-input-light  dark:border-[var(--color-input-dark)]"
    >
      <table className="w-fit font-normal text-base flex-col ">
        <thead className="w-fit border-b border-input-light dark:border-[var(--color-input-dark)]">
          <tr>
            <th className="py-2  text-right">عکس</th>
            <th className="py-2  text-right pl-48 pr-2">نام محصول</th>
            <th className="py-2 px-8 text-right">تعداد</th>
            <th className="py-2 px-8 text-right">قیمت</th>
            <th className="py-2 px-8 text-right w-fit">قیمت نهایی</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, image, name, qty, price }) => (
            <tr key={id} className="align-middle">
              <td className="py-3">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 rounded object-cover"
                />
              </td>
              <td className="pr-2">{name}</td>
              <td className="self-center text-center">{qty}</td>
              <td className="font-sans self-center text-center">
                {formatMoney(price)}
              </td>
              <td className="font-sans self-center text-center">
                {formatMoney(price * qty)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default OrderItemsTable;
