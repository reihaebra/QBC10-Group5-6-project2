type CommentItemProps = {
  name: string;
  date: string;
  text: string;
  rating: number;
};
const CommentItem: React.FC<CommentItemProps> = ({
  name,
  date,
  text,
  rating,
}) => {
  const stars = Array.from({ length: rating }, (_, i) => (
    <img
      key={i}
      src="../../public/icons/star-light.svg"
      alt="star"
      className="w-4 h-4 block dark:hidden"
    />
  ));

  const darkStars = Array.from({ length: rating }, (_, i) => (
    <img
      key={i}
      src="../../public/icons/star-dark.svg"
      alt="star-dark"
      className="w-4 h-4 hidden dark:block"
    />
  ));

  return (
    <div
      className="font-yekan-bakh bg-[var(--color-base-side-light)] dark:bg-[var(--color-base-side-dark)] 
    rounded-lg p-4 flex flex-col w-3/4 gap-4 transition-colors duration-300"
    >
      <div className="flex justify-between font-normal text-sm leading-6 text-secondary-light dark:text-[var(--color-secondary-dark)] pb-2">
        <span>{name}</span>
        <span>{date}</span>
      </div>

      <p className="text-primary-text-light dark:text-[var(--color-on-primary-light)]">
        {text}
      </p>

      <div className="flex items-center gap-1">
        {stars}
        {darkStars}
      </div>
    </div>
  );
};

export default CommentItem;
