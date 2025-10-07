import ShopProductCard from "./ui/ShopProductCard";
import data from "../../constants/Shop-page-samples";

const ShopPageProducts = () => {
  return (
    <main className="flex flex-row flex-wrap gap-6 max-w-[1200px] h-fit">
      {data.map((item) => (
        <ShopProductCard
          key={item.title}
          title={item.title}
          brand={item.brand}
          price={item.price}
          description={item.description}
          imageUrl={item.imageUrl}
          onAddToCart={() => console.log(`${item.title} added to cart!`)}
        />
      ))}
    </main>
  );
};

export default ShopPageProducts;
