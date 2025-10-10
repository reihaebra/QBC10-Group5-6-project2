import React from "react";
import Sidebar from "../components/ui/Sidebar";
import PurchaceStep2 from "../components/PurchaseSteps2";
import PurchaceForm from "../components/PurchaseForm";

const ShoppingProgressFormPage = () => {
  return (
    <div className="flex flex-col h-screen bg-background-base-light justify-between items-stretch font-yekan-bakh dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar />
      <div className="mt-12">
        <PurchaceStep2 />
      </div>
      <PurchaceForm />
    </div>
  );
};

export default ShoppingProgressFormPage;
