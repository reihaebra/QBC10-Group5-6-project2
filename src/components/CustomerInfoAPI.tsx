import type { ShippingAddress } from "../types/order";

interface Props {
  data: ShippingAddress;
}

const CustomerInfoAPI: React.FC<Props> = ({ data }) => (
  <div className="w-lg">
    <h2 className="font-bold text-xl text-right mb-3">آدرس دریافت</h2>
    <div className="flex flex-col justify-between items-start gap-4 text-base leading-relaxed">
      <div className="flex items-center gap-3">
        <span className="font-bold text-primary-main">آدرس:</span>
        <span>{data.address}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-primary-main">شهر:</span>
        <span>{data.city}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-primary-main">کد پستی:</span>
        <span>{data.postalCode}</span>
      </div>
    </div>
  </div>
);

export default CustomerInfoAPI;
