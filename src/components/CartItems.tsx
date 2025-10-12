import React from 'react'

interface CartItemProps {
    image: string;
    name: string;
    quantity: number;
    price: number;
}

const CartItems = (props: CartItemProps) => {
    const {image, name, quantity, price} = props;
    const finalPrice = quantity * price;

    return (
        
        <tr className="flex justify-between items-center w-full text-center font-normal text-base dark:text-[var(--color-primary-text-dark)]">
            <td className="flex gap-4 items-center w-88">
                <div className='p-2'>
                    <img src={image} alt={name} className="w-16 h-16 object-cover max-w-16" />
                </div>
                <p className='text-right'>{name}</p>
            </td>
            <td className='w-9'>{quantity}</td>
            <td className='w-20'>{price.toLocaleString()}</td>
            <td className='w-25'>{finalPrice.toLocaleString()}</td>
            {/* {setSumPrice(sumprice => sumprice + finalPrice)} */}
        </tr>
        
    )
}

export default CartItems
