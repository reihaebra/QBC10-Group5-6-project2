import React from 'react'
import CartTable from './CartTable'
import SummarySection from './SummarySection'

const Summary = () => {
  return (
    <div className='w-4/5 flex flex-col gap-9 mb-15'>
      <CartTable/>
      <SummarySection/>
    </div>
  )
}

export default Summary
