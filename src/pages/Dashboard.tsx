import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import AdminDropdown from "../components/ui/AdminDropdown";
import Sidebar from "../components/ui/Sidebar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  getTotalSales,
  getTotalCustomers,
  getTotalOrders,
  getTotalSalesByDate,
} from "../api/requests/dashboard";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

interface SaleData {
  date: string;
  sales: number;
}

interface ChartData {
  _id: string;
  totalSales: number;
}

const Dashboard: React.FC = () => {
  const [totalSales, setTotalSales] = useState<number>(0);
  const [totalCustomers, setTotalCustomers] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  const [salesByDate, setSalesByDate] = useState<SaleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const nowTimeStamp = new Date().getTime();
      try {
        const salesRes = await getTotalSales();
        const customersRes = await getTotalCustomers();
        const ordersRes = await getTotalOrders();
        const salesByDateRes = await getTotalSalesByDate();

        setTotalSales(salesRes?.totalSales || 0);
        setTotalCustomers(customersRes?.length || 0);
        setTotalOrders(ordersRes?.length || 0);

        const sortedData = salesByDateRes
          .slice(-5)
          .sort(
            (a: any, b: any) =>
              new Date(a._id).getTime() - new Date(b._id).getTime()
          )
          .map((item: ChartData) => ({
            date: new Date(item._id).toLocaleDateString("fa-IR"),
            sales: Math.round(item.totalSales),
          }));

        setSalesByDate(sortedData);
      } catch (e) {
        console.error("Error fetching dashboard data: ", e);
        toast.error("خطا در دریافت داده‌های داشبورد");
      } finally {
        const elapsed = new Date().getTime() - nowTimeStamp;
        setTimeout(() => {
          setLoading(false);
        }, Math.max(0, 500 - elapsed));
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Sidebar>
        <AdminDropdown />
      </Sidebar>

      <div
        className="flex flex-col gap-10 pt-8 pb-16 pr-22 font-yekan-bakh w-full 
        h-screen overflow-x-hidden 
        bg-background-base-light 
        dark:bg-[var(--color-background-primary-dark)]"
      >
        <div className="flex gap-32 w-full justify-center h-fit">
          <DashboardCard
            title="فروش کل"
            amount={`${totalSales.toLocaleString("fa-IR")} تومان`}
          />
          <DashboardCard title="مشتری‌ها" amount={totalCustomers.toString()} />
          <DashboardCard title="سفارشات" amount={totalOrders.toString()} />
        </div>

        <div className="w-full max-w-[1000px] mx-auto h-[700px]">
          <h3 className="text-secondary-light mb-6 text-sm font-bold text-right dark:text-[var(--color-secondary-dark)]">
            نمودار فروش
          </h3>
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesByDate}
                margin={{ top: 10, right: 5, bottom: 20 }}
              >
                <CartesianGrid
                  vertical={false}
                  stroke="var(--color-secondary-dark)"
                  strokeOpacity={0.6}
                />
                <XAxis
                  dataKey="date"
                  label={{
                    value: "تاریخ",
                    position: "insideBottom",
                    offset: -10,
                  }}
                  axisLine={{ stroke: "var(--color-secondary-dark)" }}
                />
                <YAxis
                  tick={{
                    dx: 15,
                    dy: -7,
                    textAnchor: "middle",
                    fontSize: 12,
                  }}
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                  label={{
                    value: "فروش",
                    angle: -90,
                    position: "insideRight",
                    offset: 10,
                    dy: -15,
                  }}
                  tickFormatter={(value) => value.toLocaleString("fa-IR")}
                />
                <Tooltip
                  cursor={{
                    fill: "rgba(233,30,99,0.1)",
                    width: 0,
                  }}
                  contentStyle={{
                    border: "none",
                    borderRadius: "8px",
                    background: "white",
                  }}
                  formatter={(value) => [
                    `${value.toLocaleString("fa-IR")} تومان`,
                    "فروش",
                  ]}
                  labelFormatter={(label) => `تاریخ: ${label}`}
                />
                <Bar
                  dataKey="sales"
                  fill="var(--color-primary-main)"
                  cursor="pointer"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
