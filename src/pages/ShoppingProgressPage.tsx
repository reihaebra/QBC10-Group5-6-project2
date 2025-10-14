import React from "react";
import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import PurchaceSteps3 from "../components/PurchaseSteps3";
import ShoppingProgress3 from "../components/ShoppingProgress3";
import PurchaseSteps2 from "../components/PurchaseSteps2";
import PurchaseForm from "../components/PurchaseForm";

const ShoppingProgressPage = () => {
  const [step, setStep] = useState(2);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState(0);


  return (
    <div className="flex flex-col h-screen bg-background-base-light justify-between items-stretch font-yekan-bakh dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar />
      <div className="mt-12">
        {(step == 2)? <PurchaseSteps2/> : <PurchaceSteps3/>}
      </div>
      {(step == 2)? <PurchaseForm
      setStep={setStep} 
      setAddress={setAddress} 
      setCity={setCity}
      setCountry={setCountry}
      setPostal={setPostal}
      /> : <ShoppingProgress3
        address={address}
        city={city} 
        country={country}
        postal={postal}/>}
    </div>
  );
};

export default ShoppingProgressPage;
