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
import type { Order } from "../../constants/order";
import { toast } from "react-hot-toast";

const OrdersDeliverOptionPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const orderData = await getOrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error("Error:", error);
        toast.error("خطا در دریافت اطلاعات سفارش");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  if (loading) return <Spinner />;
  if (!order) return <div>سفارش یافت نشد</div>;

  return (
    <>
      <Sidebar><AdminDropdown /></Sidebar>
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