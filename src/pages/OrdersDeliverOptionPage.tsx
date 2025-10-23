import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import OrderItemsTableAPI from "../components/OrderItemsTableAPI";
import CustomerInfoAPI from "../components/CustomerInfoAPI";
import OrderSummaryAPI from "../components/OrderSummaryAPI";
import StatusStripAPI from "../components/StatusStripAPI";
import ButtonSecondary from "../components/ui/ButtonSecondary";
import AdminDropdown from "../components/ui/AdminDropdown";
import Spinner from "../components/Spinner";
import { getOrderById } from "../api/requests/ordersList";
import type { Order } from "../types/order";
import { toast } from "react-hot-toast";

const OrdersDeliverOptionPage = () => {
  const { orderId } = useParams<{ orderId: string }>();

  console.log("🔍 orderId:", orderId); // ✅ Debug 1

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        console.error("❌ No orderId!"); // ✅ Debug 2
        setLoading(false);
        return;
      }

      try {
        console.log("📡 Fetching order:", orderId); // ✅ Debug 3
        setLoading(true);
        const orderData = await getOrderById(orderId);
        console.log("✅ Order data:", orderData); // ✅ Debug 4
        setOrder(orderData);
      } catch (error) {
        console.error("❌ API Error:", error); // ✅ Debug 5
        toast.error("خطا در دریافت اطلاعات سفارش");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  // ✅ Debug UI
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-blue-50">
        <div className="text-center">
          <Spinner />
          <p className="mt-4">در حال بارگذاری...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            سفارش یافت نشد
          </h2>
          <p className="text-lg mb-4">orderId: {orderId}</p>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {JSON.stringify(order, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  console.log("🎉 Rendering order:", order._id); // ✅ Debug 6

  return (
    <>
      <Sidebar>
        <AdminDropdown />
      </Sidebar>
      <div className="min-h-screen font-yekan-bakh bg-background-base-light dark:bg-[var(--color-background-primary-dark)] overflow-x-hidden flex flex-row-reverse justify-center self-center mx-auto">
        <main className="flex-1 pr-32 p-8 mt-8 mx-auto">
          <div className="flex gap-10 mx-auto max-w-7xl">
            <div className="flex-1 min-w-0">
              <OrderItemsTableAPI orderItems={order.orderItems} />
            </div>
            <div className="w-96 flex flex-col gap-6">
              <CustomerInfoAPI data={order.shippingAddress} />
              <StatusStripAPI isPaid={order.isPaid} isDelivered={false} />
              <OrderSummaryAPI
                itemsPrice={order.itemsPrice}
                taxPrice={order.taxPrice}
                shippingPrice={order.shippingPrice}
                totalPrice={order.totalPrice}
              />
              <ButtonSecondary
                text="ارسال شده"
                handleClick={() => toast.success("سفارش ارسال شد ✅")}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default OrdersDeliverOptionPage;
