import CartItems from "./CartItems";
import { items as cart } from "../../constants/shopping-progress";
import { useCartContext } from "../context/useCartContext";


interface TableProps {
  setSum: React.Dispatch<React.SetStateAction<number>>;
}

const CartTable = (props: TableProps) => {
  const { setSum } = props;
  const {cart} = useCartContext()!;

  console.log(cart);

  const list = cart.map((item, index) => (
    <CartItems
      key={index}
      image={item.imageUrl!}
      name={item.title}
      quantity={item.quantity!}
      price={item.price}
    />
  ));


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity!,
    0
  );

  setSum(total);

  return (
    <div>
      <table className="w-full text-right table-fixed">
        <thead>
          <tr className="pb-2 flex flex-row justify-between text-center dark:text-[var(--color-primary-text-dark)]">
            <th className="flex gap-4 w-88 font-normal text-base">
              <p className="w-20">عکس</p>
              <p className="max-w-75">نام محصول</p>
            </th>
            <th className="w-9 font-normal text-base">تعداد</th>
            <th className="w-20 font-normal text-base">قیمت</th>
            <th className="w-25 font-normal text-base">قیمت نهایی</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default CartTable;
