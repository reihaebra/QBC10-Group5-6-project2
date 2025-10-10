import React from "react";
import DashboardCard from "../components/DashboardCard";
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

const data = [
  { month: "فروردین", sale: 3 },
  { month: "اردیبهشت", sale: 1 },
  { month: "خرداد", sale: 2 },
  { month: "تیر", sale: 4 },
  { month: "مرداد", sale: 1 },
];
const dataMax = Math.max(...data.map((item) => item.sale));
const Dashboard: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col gap-10 pt-[110px] mb-[110px] relative w-screen bg-background-base-light h-screen">
        <div className="flex gap-32 w-full justify-center h-fit">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
        {/* نمودار فروش */}
        <div className="w-full  rounded-2xl p-6 max-w-[1584px] mx-auto h-[984px]">
          <h3 className="text-secondary-light mb-4 text-sm font-bold text-right">
            نمودار فروش
          </h3>
          <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  vertical={false}
                  stroke="var(--color-secondary-dark)"
                  strokeDasharray=""
                />

                <XAxis dataKey="month" />
                <YAxis
                  tickMargin={15}
                  domain={[0, dataMax + 1]}
                  ticks={[...Array(dataMax + 2).keys()]}
                  orientation="right"
                  axisLine={false} // حذف خط عمودی محور
                  tickLine={false} // حذف خطوط کوچک کنار tickها
                />

                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-primary-main)", color: "var(--color-on-primary-light)" }}
                  cursor={{ fill: "rgba(233,30,99,0.1)" }}
                />
                <Bar
                  dataKey="sale"
                  fill="var(--color-primary-main)"
                  radius={[8, 8, 0, 0]}
                  barSize={140}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-secondary-light mb-4 text-xs font-bold text-center">
           تاریخ
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
