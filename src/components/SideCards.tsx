import ProductCard from "./ui/ProductCard";

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

interface SideCardsProps {
  products: Product[];
}

const SideCards: React.FC<SideCardsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 h-fit">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} size="small" />
      ))}
    </div>
  );
};

export default SideCards;
