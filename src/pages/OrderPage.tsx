import Sidebar from "../components/ui/Sidebar";
import OrdersFrame from "../components/OrdersFrame";
const OrderPage = () => {
  return (
    <>
      <div className="relative flex justify-between">
        <Sidebar />
        <div className="relative flex w-screen  mr-24 mt-40  px-10 mx-a">
          <OrdersFrame />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
