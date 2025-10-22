import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface FavoriteItem {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

interface FavoriteContextType {
  favorites: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (title: string) => void;
  isFavorite: (title: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.title === item.title)) return prev;
      return [...prev, item];
    });
  };

  const removeFavorite = (title: string) => {
    setFavorites((prev) => prev.filter((f) => f.title !== title));
  };

  const isFavorite = (title: string) =>
    favorites.some((f) => f.title === title);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context)
    throw new Error("useFavorite must be used within FavoriteProvider");
  return context;
};
