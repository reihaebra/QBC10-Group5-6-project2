interface ButtonPrimaryProps {
  text: string;
  iconSrc?: string;
  altText?: string;
  bgColor?: string;
  handleClick: () => void;
}

const ButtonPrimary = ({
  text,
  iconSrc,
  altText = "",
  bgColor = "bg-primary-main",
  handleClick,
}: ButtonPrimaryProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-primary-dark ${bgColor}`}
    >
      <span className="font-normal text-sm text-on-primary-light">{text}</span>
      {iconSrc && <img src={iconSrc} alt={altText} />}
    </button>
  );
};

export default ButtonPrimary;
