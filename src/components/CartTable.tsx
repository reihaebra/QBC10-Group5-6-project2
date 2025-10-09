import React from 'react'
import CartItems from './CartItems'
import {items} from '../../constants/shopping_progress'

const CartTable = () => {
  return (
    <div className=''>
      <table className="w-full text-right table-fixed">
        <thead>
          <tr className='pb-2 flex flex-row justify-between text-center dark:text-[var(--color-primary-text-dark)]'>
            <th className="flex gap-4 w-88 font-normal text-base">
              <p className='w-20'>عکس</p>
              <p className='max-w-75'>نام محصول</p>
            </th>
            <th className='w-9 font-normal text-base'>تعداد</th>
            <th className='w-20 font-normal text-base'>قیمت</th>
            <th className='w-25 font-normal text-base'>قیمت نهایی</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <CartItems key={index} image={item.image} name={item.name} quantity={item.quantity} price={item.price} />
          ))}
        </tbody>
      </table>
        
    </div>
  )
}

export default CartTable
