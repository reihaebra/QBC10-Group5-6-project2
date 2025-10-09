import React from 'react'
import CartTable from './CartTable'
import SummarySection from './SummarySection'

const Summary = () => {
  return (
    <div className='w-[80%] flex flex-col gap-[36px] mb-15'>
      <CartTable/>
      <SummarySection/>
    </div>
  )
}

export default Summary
