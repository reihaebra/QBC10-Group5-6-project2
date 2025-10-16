import ProductCard from "./ui/ProductCard";
import allProductsSample from "../../constants/all-products-samples";
import { useFavorite } from "../context/FavoriteContext";

const Favorite = () => {
  const { favorites } = useFavorite();
  return (
    <div>
      <div className="flex flex-wrap justify-start gap-8">
        {favorites.length === 0 ? (
          <p className="text-center text-lg m-8 font-yekan-bakh text-primary-main">
            هنوز هیچ محصولی به علاقه‌مندی‌ها اضافه نکردی!
          </p>
        ) : (
          favorites.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              size="big"
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
