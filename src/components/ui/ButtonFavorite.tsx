import { useFavorite } from "../../context/FavoriteContext";

interface ButtonFavoriteProps {
  title: string;
  price: string;
  imageUrl: string;
}

const ButtonFavorite = ({ title, price, imageUrl }: ButtonFavoriteProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const active = isFavorite(title);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (active) {
      removeFavorite(title);
    } else {
      addFavorite({ id: Date.now(), title, price, imageUrl });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center cursor-pointer"
    >
      <img
        src={active ? "/icons/favorite-hover.svg" : "/icons/favorite.svg"}
        alt="favorite"
        className="transition hover:content-[url('./../../public/icons/favorite-hover.svg')]"
      />
    </button>
  );
};

export default ButtonFavorite;
