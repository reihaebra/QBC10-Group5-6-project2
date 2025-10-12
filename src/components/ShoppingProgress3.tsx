import React from 'react'
import Summary from '../components/Summary'
import CartTable from './CartTable'
import SummarySection from './SummarySection'

export interface SummaryProps {
  address: string;
  city: string;
  country: string;
  postal: number;
}

const ShoppingProgress3 = (props: SummaryProps) => {
  const {address, city, country, postal} = props;

  return (
    <main className="flex-1 h-screen bg-background-base-light dark:bg-[var(--color-background-primary-dark)] mr-20 flex flex-col justify-center items-center pt-12 gap-18 font-yekan-bakh ">
      <div className='w-4/5 flex flex-col gap-9 mb-15'>
        <CartTable/>
        <SummarySection
        address={address}
        city={city} 
        country={country}
        postal={postal}/>
      </div>
    </main>
  )
}

export default ShoppingProgress3
