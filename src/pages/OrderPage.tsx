import Sidebar from "../components/ui/Sidebar";
import OrdersFrame from "../components/OrdersFrame";
import AdminDropdown from "../components/ui/AdminDropdown";
const OrderPage = () => {
  return (
    <>
      <div className="relative flex h-screen justify-between bg-background-base-light dark:bg-[var(--color-background-primary-dark)] ">
        <Sidebar>
          <AdminDropdown />
        </Sidebar>
        <div className="relative flex w-screen  mr-24 mt-40  px-10 mx-a">
          <OrdersFrame />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
