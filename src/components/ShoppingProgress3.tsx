import React from 'react'
import Summary from '../components/Summary'
import Sidebar from '../components/ui/Sidebar'
import PurchaseSteps3 from './PurchaseSteps3'


// interface ShoppingProgress3Props{
//     isVisible: boolean;
// }

const ShoppingProgress3 = () => {
    // const {isVisible = false} = props;

  return (
    <>
        {/* { isVisible &&
            (<Summary/>)

        } */}

      <div className="flex">
        <Sidebar/>
        <main className="w-[100%] h-[100vh] bg-background-base-light dark:bg-[var(--color-background-primary-dark)] m-auto flex flex-col items-center pt-10 gap-[76px] font-yekan-bakh">
          {/* <ProgressBar/> */}
          {/* <ShoppingProgress2/> */}
          {/* <ShoppingProgress3 isVisible={true}/> */}
          <PurchaseSteps3/>
          <Summary/>
        </main>
      </div>
    </>
  )
}

export default ShoppingProgress3
