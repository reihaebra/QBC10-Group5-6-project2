import React, { useState } from "react";
import ProductCard from "./ui/ProductCard";

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<boolean[]>([false, false]);

  const toggleFavorite = (index: number) => {
    const newFavs = [...favorites];
    newFavs[index] = !newFavs[index];
    setFavorites(newFavs);
  };

  return (له
    <div className="bg-white dark:bg-[var(--color-background-primary-dark)] min-h-screen p-6">
      <div className="flex flex-row gap-8">
        <div className="flex flex-row gap-6">
         
          <div className="relative dark:text-[var(--color-primary-text-dark)]">
            <ProductCard
              size="big"
              title="Apple ipad Pro 12.9-inch"
              price="۱۰,۰۰۰ تومان"
              imageUrl="https://api2.zoomit.ir/media/652cfef7eb21a6b54f4f8f13"
            />
            <button
              onClick={() => toggleFavorite(0)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <img
                src={
                  favorites[0]
                    ? "../src/assets/icons/favorite-hover.svg"
                    : "./src/assets/icons/favorite.svg"
                }
                alt="favorite"
              />
            </button>
          </div>

        
          <div className="relative dark:text-[var(--color-primary-text-dark)]">
            <ProductCard
              size="big"
              title="Samsung Galaxy Tab S8"
              price="۸,۵۰۰ تومان"
              imageUrl="https://mastercall.sn/wp-content/uploads/2025/03/6494230_sd.jpg"
            />
            <button
              onClick={() => toggleFavorite(1)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <img
                src={
                  favorites[1]
                    ? "../src/assets/icons/favorite-hover.svg"
                    : "./src/assets/icons/favorite.svg"
                }
                alt="favorite"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
