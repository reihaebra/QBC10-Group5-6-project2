import data from "../../constants/cartSample";
import type { ProductList } from "../../constants/cartSample";
import InventoryDropdown from "./ui/InventoryDropdown";
import ButtonSecondary from "./ui/ButtonSecondary";

export const Cart = () => {
  const handleButtonClick = () => {
    console.log("دکمه کلیک شد!");
  };
  return (
    <div className="w-full h-screen font-yekan-bakh text-base font-normal text-primary-text-light dark:text-[var(--color-primary-text-dark)]">
      {/* Cart Table */}
      <div className="px-8">
        <table className="w-full rounded-xl table-fixed border-collapse">
          <tbody className="text-[var(--color-primary-text-light)] dark:text-[var(--color-primary-text-dark)]">
            {data.map((data: ProductList) => (
              <tr className="hover:bg-[var(--color-primary-hover-dark)] transition-all duration-150">
                {/* Image */}
                <td className="p-2 w-1/10">
                  <img
                    className="w-[88px] h-[88px] rounded-sm cursor-pointer"
                    src={data.imageUrl}
                    alt={data.title || "image"}
                  />
                </td>
                {/*Title Brand Price*/}
                <td className="">
                  {/* Title */}
                  <p className="text-[var(--color-primary-main)]">
                    {data.title}
                  </p>
                  {/* Brand */}
                  <p>{data.brand}</p>
                  {/* Price */}
                  <p className="font-bold">{data.price}</p>
                </td>
                {/* Buttons */}
                <td>
                  <div className="flex justify-end items-center pl-2">
                    <div className="w-40 h-1 flex justify-center items-center">
                      <InventoryDropdown />
                    </div>
                    <img
                      className="w-4 h-4 cursor-pointer"
                      src="/../../public/icons/cart-delete-red.svg"
                      alt="delete"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col items-start gap-4 max-w-xl mt-8">
          <p className="font-semibold text-xl">تعداد (۳)</p>
          <p className="font-bold text-2xl mb-2">۱۰,۰۰۰ تومان</p>
          <div className="w-full">
            <ButtonSecondary
              text="تکمیل خرید"
              handleClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
