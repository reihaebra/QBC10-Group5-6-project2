import Cart from "../components/Cart";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";

const CartPage = () => {
  return (
    <>
      <div className="relative flex w-full h-screen justify-between dark:bg-[var(--color-background-primary-dark)] ">
        <Sidebar>
          <UserDropdown />
        </Sidebar>
        <div className="relative flex w-screen mr-24">
          <Cart />
        </div>
      </div>
    </>
  );
};
export default CartPage;
