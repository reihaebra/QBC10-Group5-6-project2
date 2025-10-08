interface ButtonPrimaryProps {
  text: string;
  iconSrc?: string;
  altText?: string;
  handleClick: () => void;
}

const ButtonPrimary = ({
  text,
  iconSrc,
  altText = "",
  handleClick,
}: ButtonPrimaryProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 bg-primary-main rounded-lg cursor-pointer hover:bg-primary-dark"
    >
      <span className="font-normal text-sm text-on-primary-light">{text}</span>
      {iconSrc && <img src={iconSrc} alt={altText} />}
    </button>
  );
};

export default ButtonPrimary;
