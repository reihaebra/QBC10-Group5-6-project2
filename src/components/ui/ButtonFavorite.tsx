
const ButtonFavorite = () => {
  return (
    <button className="flex items-center justify-center absolute top-4 right-4 cursor-pointer">
      <img
        src="../../../public/icons/favorite.svg"
        alt="favorite"
        className="hover:content-[url('../../../public/icons/favorite-hover.svg')]"
      />
    </button>
  );
};

export default ButtonFavorite;
