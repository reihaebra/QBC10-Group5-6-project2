interface ButtonPrimaryProps {
  type?: "button" | "submit";
  text: string;
  iconSrc?: string;
  altText?: string;
  bgColor?: string;
  bgHoverColor?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonPrimary = ({
  type = "button",
  text,
  iconSrc,
  altText = "",
  bgColor = "bg-primary-main",
  bgHoverColor = "bg-primary-dark",
  handleClick,
}: ButtonPrimaryProps) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`flex items-center font-yekan-bakh gap-2 px-3 py-2 rounded-lg 
        cursor-pointer hover:${bgHoverColor} ${bgColor}`}
    >
      <span className="font-normal text-sm text-on-primary-light">{text}</span>
      {iconSrc && <img src={iconSrc} alt={altText} />}
    </button>
  );
};

export default ButtonPrimary;
