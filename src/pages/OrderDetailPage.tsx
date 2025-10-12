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
      <div className="min-h-screen font-yekan-bakh bg-background-base-light dark:bg-[var(--color-background-primary-dark)] overflow-x-hidden flex flex-row-reverse justify-center items-center self-center mx-auto">
        <Sidebar />

        <main className="flex-1 pr-32 p-8 mt-6 mx-auto">
          <div className="flex  gap-10 mx-auto ">
            <div className="col-span-2 min-w-0">
              <OrderItemsTable />
            </div>
            <div className=" flex flex-col gap-3 min-w-0">
              <CustomerInfo data={addressSeed} />
              <StatusStrip />
              <OrderSummary />
              <ButtonSecondary text="ارسال شده" handleClick={() => {}} />
            </div>
          </div>
        </main>
      </div>
    </TestDataProvider>
  );
};

export default CheckoutPage;
