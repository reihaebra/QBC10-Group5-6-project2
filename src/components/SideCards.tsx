import ProductCard from "./ui/ProductCard";

export interface Product {
  id: number;
  title: string;
  brand?: string;
  price: string;
  description?: string;
  imageUrl: string; // ✅ اجباری شد
  rating?: number;
  reviews?: number;
  stock?: number;
  updatedAt?: string;
}


interface SideCardsProps {
  products: Product[];
}

const SideCards: React.FC<SideCardsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 2xl:grid-cols-3 gap-4 h-fit">
      {products.map((product: Product, i: number) => (
        <ProductCard key={i} {...product} size="small" />
      ))}
    </div>
  );
};

export default SideCards;
