import Sidebar from "../components/ui/Sidebar";
import OrdersFrame from "../components/OrdersFrame";
import UserDropdown from "../components/ui/UserDropdown";
import { useEffect, useState } from "react";
import type { Order } from "./OrderPage";
import { getAllOrdersMine } from "../api/requests/getAllOrdersMine";

const UserOrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await getAllOrdersMine();
      setOrders(response);
    }
    fetchData();
  },[])
  return (
    <div
      className="relative flex min-h-screen h-full justify-between 
      bg-background-base-light dark:bg-[var(--color-background-primary-dark)] "
    >
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div className="relative flex w-screen py-8 pl-10 pr-32">
        <OrdersFrame order={orders}/>
      </div>
    </div>
  );
};

export default UserOrdersPage;