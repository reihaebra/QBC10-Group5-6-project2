import React from "react";

const CartItemRow = (props) => {
  const {
    name = "",
    brand = "",
    price = 0,
    quantity = 1,
    image = "",
    onRemove = () => {},
    onChangeQty = () => {},
  } = props;

  return (
    <div className="flex items-center gap-4 bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm">
      {/* دکمه حذف و تعداد */}
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={onRemove}
          className="p-2 rounded-md hover:bg-red-100 dark:hover:bg-red-600/20"
        >
          ❌
        </button>

        <select
          value={quantity}
          onChange={(e) => onChangeQty(Number(e.target.value))}
          className="border rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-600"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {/* تصویر */}
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover rounded-md border dark:border-gray-600"
      />

      {/* جزئیات */}
      <div className="flex-1 flex justify-between">
        <div>
          <div className="font-semibold text-pink-600">{name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-300">
            {brand}
          </div>
        </div>
        <div className="text-right font-bold text-sm">
          {price.toLocaleString()} تومان
        </div>
      </div>
    </div>
  );
};

export default CartItemRow;
