interface ButtonSecondaryProps {
  text: string;
  handleClick: () => void;
}

const ButtonSecondary = ({ text, handleClick }: ButtonSecondaryProps) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center px-8 py-2 w-full bg-primary-main rounded-full cursor-pointer hover:bg-primary-dark"
    >
      <span className="font-semibold text-xl leading-8 text-on-primary-light">
        {text}
      </span>
    </button>
  );
};

export default ButtonSecondary;
