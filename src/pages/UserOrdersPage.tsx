import Sidebar from "../components/ui/Sidebar";
import OrdersFrame from "../components/OrdersFrame";
import UserDropdown from "../components/ui/UserDropdown";
import { useEffect, useState } from "react";
import type { Order } from "./OrderPage";
import { getAllOrdersMine } from "../api/requests/getAllOrdersMine";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const UserOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const nowTimeStamp = new Date().getTime();
      try {
        const response = await getAllOrdersMine();
        if (response) setOrders(response);
      } catch (e) {
        console.error("Error fetching orders: ", e);
        toast.error("سفارشی یافت نشد");
      } finally {
        const elapsed = new Date().getTime() - nowTimeStamp;
        setTimeout(() => {
          setLoading(false);
        }, Math.max(0, 500 - elapsed));
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      className="relative flex min-h-screen h-full justify-between 
      bg-background-base-light dark:bg-[var(--color-background-primary-dark)] "
    >
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div className="relative flex w-screen py-8 pl-10 pr-32">
        <OrdersFrame order={orders} />
      </div>
    </div>
  );
};

export default UserOrdersPage;
