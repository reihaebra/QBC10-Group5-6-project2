import Cart from "../components/Cart";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";

const CartPage = () => {
  return (
    <div
      className="flex w-full justify-between bg-[var(--color-background-base-light)] 
      dark:bg-[var(--color-background-primary-dark)] py-8 pr-24 min-h-screen h-full"
    >
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div className="flex w-screen">
        <Cart />
      </div>
    </div>
  );
};
export default CartPage;
