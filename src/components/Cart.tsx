import InventoryDropdown from "./ui/InventoryDropdown";
import ButtonSecondary from "./ui/ButtonSecondary";
import { useCartContext } from "../../src/context/useCartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Cart = () => {
  const { cart, removeFromCart, addToCart } = useCartContext()!;
  const navigate = useNavigate();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      addToCart({ ...product, quantity: newQuantity });
    }
  };

  const totalQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleButtonClick = () => {
    navigate("/user/shop-progress");
  };

  return (
    <div
      className="w-full h-screen font-yekan-bakh text-base font-normal 
    text-primary-text-light dark:text-[var(--color-primary-text-dark)]"
    >
      <div className="px-8">
        {cart.length > 0 ? (
          <>
            <table className="w-full rounded-xl table-fixed border-collapse">
              <tbody className="text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
                {cart.map((item) => (
                  <tr
                    key={item?.id ?? item.title}
                    className="hover:bg-primary-hover-dark transition-all duration-150"
                  >
                    <td className="p-2 w-1/10">
                      <img
                        className="w-[88px] h-[88px] rounded-sm cursor-pointer"
                        src={item.imageUrl}
                        alt={item.title || "image"}
                      />
                    </td>

                    <td className="flex flex-col gap-2">
                      <p className="text-primary-main">{item.title}</p>
                      <p className="font-bold">{item.brand}</p>
                      <p className="font-bold">{item.price}</p>
                    </td>

                    <td>
                      <div className="flex justify-end items-center pl-2 gap-2">
                        <div className="w-40 h-1 flex justify-center items-center">
                          <InventoryDropdown
                            value={item.quantity || 1}
                            onChange={(value: number) =>
                              handleQuantityChange(item.id, value)
                            }
                          />
                        </div>
                        <img
                          className="w-4 h-4 cursor-pointer"
                          src="/../../public/icons/cart-delete-red.svg"
                          alt="delete"
                          onClick={() => {
                            removeFromCart(item.id, item.title);
                            toast.success("محصول از سبد خرید حذف شد.");
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-col items-start gap-4 max-w-xl mt-8">
              <p className="font-semibold text-xl">تعداد ({totalQuantity})</p>
              <p className="font-bold text-2xl mb-2">
                {totalPrice.toLocaleString("fa-IR")} تومان
              </p>
              <div className="w-full">
                <ButtonSecondary
                  text="تکمیل خرید"
                  handleClick={handleButtonClick}
                />
              </div>
            </div>
          </>
        ) : (
          <p className="text-primary-text-light dark:text-white font-semibold">
            محصولی انتخاب نکرده‌اید.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
