import React, { useState } from "react";
import CartItemRow from "../components/card"
const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: 10000000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
      quantity: 1,
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      brand: "Samsung",
      price: 8500000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
      quantity: 1,
    },
  ]);

  const removeItem = (id) => setItems(items.filter((it) => it.id !== id));
  const changeQty = (id, q) =>
    setItems(items.map((it) => (it.id === id ? { ...it, quantity: q } : it)));

  const totalPrice = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-lg font-bold mb-4">سبد خرید</h2>

      <div className="flex flex-col gap-4">
        {items.length === 0 ? (
          <div className="text-center text-gray-500">سبد خرید خالی است</div>
        ) : (
          items.map((item) => (
            <CartItemRow
              key={item.id}
              {...item}
              onRemove={() => removeItem(item.id)}
              onChangeQty={(q) => changeQty(item.id, q)}
            />
          ))
        )}
      </div>

      {/* جمع کل */}
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <div className="font-medium">جمع کل:</div>
        <div className="text-xl font-bold text-pink-600">
          {totalPrice.toLocaleString()} تومان
        </div>
      </div>

      {/* دکمه خرید */}
      <button
        className="w-full mt-4 bg-pink-600 text-white py-2 rounded-md font-medium"
        disabled={items.length === 0}
      >
        تکمیل خرید
      </button>
    </div>
  );
};

export default Cart;
