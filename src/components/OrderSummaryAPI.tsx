interface Props {
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

const OrderSummaryAPI: React.FC<Props> = ({
  itemsPrice,
  taxPrice,
  shippingPrice,
  totalPrice,
}) => {
  const ir = (n: number) => `${n.toLocaleString("fa-IR")} تومان`;

  return (
    <aside className="pt-4 w-full">
      <h3 className="font-bold text-xl text-right mb-4">خلاصه خرید</h3>
      <div className="flex flex-col gap-2 w-full font-bold text-base">
        <div className="flex justify-between">
          <span>قیمت محصولات:</span>
          <span>{ir(itemsPrice)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>هزینه ارسال:</span>
          <span>{ir(shippingPrice)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>مالیات:</span>
          <span>{ir(taxPrice)}</span>
        </div>
        <div className="flex justify-between py-2 border-t pt-2">
          <span className="text-lg">مبلغ نهایی:</span>
          <span className="text-lg font-black">{ir(totalPrice)}</span>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummaryAPI;