import ProductCard from "./ui/ProductCard";
import { useFavorite } from "../context/FavoriteContext";

const Favorite = () => {
  const { favorites } = useFavorite();

  if (favorites.length === 0) {
    return (
      <div className="font-yekan-bakh text-primary-text-light dark:text-white font-semibold">
        هیچ محصولی به علاقه‌مندی‌ها اضافه نشده است.
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-start gap-8">
        {favorites.map((product) => (
          <div>
            <ProductCard
              key={product.id}
              size="small"
              product={{
                _id: product.id.toString(),
                name: product.title,
                price: product.price,
                image: product.imageUrl,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
