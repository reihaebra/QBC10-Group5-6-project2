import ProductCard from "./ui/ProductCard";
import ButtonSecondary from "./ui/ButtonSecondary";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  category?: { name: string };
  price: number | string;
  description?: string;
  image: string;
  rating?: number;
  numReviews?: number;
  countInStock?: number;
  updatedAt?: string;
}

interface SpecialProductsProps {
  specialProducts: Product[];
}

const SpecialProducts: React.FC<SpecialProductsProps> = ({
  specialProducts,
}) => {
  const navigateToShop = useNavigate();

  return (
    <div className="flex flex-col gap-6 w-full items-center justify-center">
      <div className="flex justify-between items-center py-3 w-full">
        <h2 className="font-yekan-bakh text-xl font-semibold">محصولات ویژه</h2>
        <div className="font-yekan-bakh">
          <ButtonSecondary
            text="فروشگاه"
            handleClick={() => {
              navigateToShop("/user/shop");
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-8 h-fit w-fit">
        {specialProducts.map((product) => (
          <ProductCard key={product._id} product={product} size="big" />
        ))}
      </div>
    </div>
  );
};

export default SpecialProducts;
