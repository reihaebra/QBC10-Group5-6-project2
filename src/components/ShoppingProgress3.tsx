import React from 'react'
import Summary from '../components/Summary'
import Sidebar from '../components/ui/Sidebar'
import PurchaseSteps3 from './PurchaseSteps3'

const ShoppingProgress3 = () => {
  return (
    <main className="flex-1 h-screen bg-background-base-light dark:bg-[var(--color-background-primary-dark)] mr-20 flex flex-col justify-center items-center pt-12 gap-18 font-yekan-bakh ">
      <PurchaseSteps3/>
      <Summary/>
    </main>
  )
}

export default ShoppingProgress3
