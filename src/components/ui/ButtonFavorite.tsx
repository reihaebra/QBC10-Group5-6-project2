import { useFavorite } from "../../context/FavoriteContext";

interface ButtonFavoriteProps {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

const ButtonFavorite = ({
  id,
  title,
  price,
  imageUrl,
}: ButtonFavoriteProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();

  const handleClick = () => {
    if (isFavorite(id)) removeFavorite(id);
    else addFavorite({ id, title, price, imageUrl });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center absolute top-4 right-4 cursor-pointer"
    >
      <img
        src={
          isFavorite(id) ? "/icons/favorite-hover.svg" : "/icons/favorite.svg"
        }
        alt="favorite"
      />
    </button>
  );
};

export default ButtonFavorite;
