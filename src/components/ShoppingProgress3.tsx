import { useState } from "react";
import CartTable from "./CartTable";
import SummarySection from "./SummarySection";

interface addressProps {
  address: string;
  city: string;
  country: string;
  postal: string;
}

const ShoppingProgress3 = (props: addressProps) => {
  const { address, city, country, postal } = props;

  const [sum, setSum] = useState(0);

  return (
    <main className="flex-1 h-screen bg-background-base-light dark:bg-[var(--color-background-primary-dark)] mr-20 flex flex-col justify-center items-center pt-12 gap-18 font-yekan-bakh ">
      <div className="w-4/5 flex flex-col gap-9 mb-15">
        <CartTable setSum={setSum} />
        <SummarySection
          address={address}
          city={city}
          country={country}
          postal={postal}
          sum={sum}
        />
      </div>
    </main>

  );
};

export default ShoppingProgress3;
