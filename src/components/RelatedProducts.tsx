import ProductCard from "./ui/ProductCard";
import allProducts from "../../constants/all-products-samples";

const RelatedProducts = () => {
  return (
    <div
      className="font-yekan-bakh w-full px-12
                 bg-[color:var(--color-background-base-light)]
                 dark:bg-[color:var(--color-background-primary-dark)]
                 transition-colors mr-6 duration-300"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
