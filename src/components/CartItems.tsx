import React from 'react'

interface CartItemProps {
    image: string;
    name: string;
    count: number;
    price: number;
    finalPrice?: number;
}

const CartItems = (props: CartItemProps) => {
    let {image, name, count, price, finalPrice = 0} = props;
    finalPrice = count * price;

    return (
        
        <tr className="flex justify-between items-center w-[100%] text-center font-normal text-base dark:text-primary-text-dark">
            <td className="flex gap-[16px] items-center w-[350px]">
                <div className='p-[8px]'>
                    <img src={image} alt={name} className="w-16 h-16 object-cover max-w-[64px]" />
                </div>
                <p className='text-right'>{name}</p>
            </td>
            <td className='w-[36px]'>{count}</td>
            <td className='w-[80px]'>{price.toLocaleString()}</td>
            <td className='w-[80px]'>{finalPrice.toLocaleString()}</td>
        </tr>
        
    )
}

export default CartItems
