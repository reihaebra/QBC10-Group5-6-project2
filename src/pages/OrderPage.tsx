import Sidebar from "../components/ui/Sidebar";
import OrdersFrame from "../components/OrdersFrame";
import SidebarDropdown from "../components/ui/SidebarDropdown";
import Pagination from "../components/Pagination"; // مسیر Pagination را درست کنید
import { useEffect, useState } from "react";
import { getAllOrders } from "../api/requests/ordersList";
import Spinner from "../components/Spinner";

interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string | number;
}

interface PaymentResult {
  update_time: string | number;
}

interface User {
  _id: string | number;
  username: string;
  email: string;
}

interface OrderItems {
  name: string;
  qty: number;
  price: number;
  image: string;
  product: string | number;
  _id: string | number;
}

export interface Order {
  shippingAddress: ShippingAddress;
  paymentResult: PaymentResult;
  _id: string | number;
  user: User;
  orderItems: OrderItems[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string | number;
  updatedAt: string | number;
  __v: number;
  deliveredAt?: string | number;
  paidAt?: string | number;
}

const OrderPage = () => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  
  const ITEMS_PER_PAGE = 10;

  // محاسبه orders فعلی بر اساس صفحه
  const currentOrders = allOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(allOrders.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const nowTimeStamp = new Date().getTime();
      try {
        console.log("📡 Fetching orders...");
        const response = await getAllOrders();
        console.log("✅ API Response:", response);

        if (response && Array.isArray(response)) {
          setAllOrders(response);
          console.log("✅ Orders set:", response.length);
        } else {
          console.error("❌ Invalid response format:", response);
          setAllOrders([]);
        }
      } catch (error) {
        console.error("❌ Error fetching orders:", error);
        setAllOrders([]);
      } finally {
        const elapsed = new Date().getTime() - nowTimeStamp;
        setTimeout(() => {
          setLoading(false);
        }, Math.max(0, 500 - elapsed));
      }
    };

    fetchOrders();
  }, []);

  console.log("🎯 Rendering with orders:", allOrders.length, "Current page:", currentPage);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="relative flex min-h-screen h-full justify-between bg-background-base-light dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar>
        <SidebarDropdown />
      </Sidebar>

      <div className="relative flex flex-1 w-full py-8 pl-10 pr-32 flex flex-col">
        <OrdersFrame order={currentOrders} />
        
        {allOrders.length > ITEMS_PER_PAGE && (
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default OrderPage;