import ProductCard from "../components/ui/ProductCard";
import ButtonSecondary from "../components/ui/ButtonSecondary";
import { Link } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  brand?: string;
  price: string;
  description?: string;
  imageUrl: string;
  rating?: number;
  reviews?: number;
  stock?: number;
  updatedAt?: string;
}


interface SpecialProductsProps {
  specialProducts: Product[];
}

const SpecialProducts: React.FC<SpecialProductsProps> = ({ specialProducts }) => {
  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center">
      <div className="flex justify-between items-center py-3 w-full">
        <h2 className="font-yekan-bakh text-xl font-semibold">محصولات ویژه</h2>
        <Link to={`/user/shop`} className="w-[150px]">

        <ButtonSecondary
          text="فروشگاه"
          handleClick={() => {}}
        />
        </Link>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 h-fit w-fit">
        {specialProducts.map((product: Product, i: number) => (
          <ProductCard key={i} product={product} size="big" />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
