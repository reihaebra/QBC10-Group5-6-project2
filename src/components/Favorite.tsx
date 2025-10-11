import ProductCard from "./ui/ProductCard";
import allProductsSample from "../../constants/all-products-samples";

const Favorite = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8">
        {allProductsSample.map((product) => (
          <div key={product.id}>
            <ProductCard
              size="big"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
