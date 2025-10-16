import Sidebar from "../components/ui/Sidebar";
import OrdersFrame from "../components/OrdersFrame";
import AdminDropdown from "../components/ui/AdminDropdown";
const OrderPage = () => {
  return (
    <div
      className="relative flex min-h-screen h-full justify-between 
      bg-background-base-light dark:bg-[var(--color-background-primary-dark)] "
    >
      <Sidebar>
        <AdminDropdown />
      </Sidebar>
      <div className="relative flex w-screen py-8 pl-10 pr-32">
        <OrdersFrame />
      </div>
    </div>
  );
};

export default OrderPage;
