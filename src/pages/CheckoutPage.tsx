import React from "react";
import Sidebar from "../components/ui/Sidebar";
import OrderItemsTable from "../components/OrderItemsTable";
import CustomerInfo from "../components/CustomerInfo";
import OrderSummary from "../components/OrderSummary";
import StatusStrip from "../components/StatusStrip";
import ButtonSecondary from "../components/ui/ButtonSecondary";
import {
  TestDataProvider,
  addressSeed,
  itemsSeed,
} from "../components/TestData";

const CheckoutPage = () => {
  return (
    <TestDataProvider seed={itemsSeed} address={addressSeed}>
      <div className="min-h-screen font-yekan-bakh bg-background-base-light dark:bg-[#0F0F10] overflow-x-hidden flex flex-row-reverse">
        <aside className="h-screen fixed top-0 right-0">
          <Sidebar />
        </aside>

        <main className="flex-1 pr-60 p-8 mt-9 mr-0.5">
          <div className="grid grid-cols-3 gap-14 mx-auto">
            <div className="col-span-2 min-w-0">
              <OrderItemsTable />
            </div>
            <div className="col-span-1 flex flex-col gap-3 min-w-0">
              <CustomerInfo data={addressSeed} />
              <StatusStrip />
              <OrderSummary />
              <ButtonSecondary text="پرداخت" handleClick={() => {}} />
            </div>
          </div>
        </main>
      </div>
    </TestDataProvider>
  );
};

export default CheckoutPage;
