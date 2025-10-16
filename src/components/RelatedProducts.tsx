import ProductCard from "./ui/ProductCard";
import allProducts from "../../constants/all-products-samples";

const RelatedProducts = () => {
  return (
    <div
      className="font-yekan-bakh w-full
                 bg-[color:var(--color-background-base-light)]
                 dark:bg-[color:var(--color-background-primary-dark)]
                 transition-colors duration-300"
    >
      <div className="flex flex-wrap gap-8">
        {allProducts.map((p) => (
          <ProductCard
            key={p.id}
            size="small"
            title={p.title}
            price={p.price}
            imageUrl={p.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
