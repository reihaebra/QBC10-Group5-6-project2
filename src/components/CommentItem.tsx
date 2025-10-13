// CommentItem.jsx
import React from "react";
type CommentItemProps = {
  name: string;
  date: string;
  text: string;
  rating: number;
};
const CommentItem : React.FC<CommentItemProps> = ({ name, date, text, rating }) => {
  // برای مثال ستاره‌ها فقط به عنوان تصویر ساده
  const stars = Array.from({ length: rating }, (_, i) => (
    <img
      key={i}
      src="src/assets/icons/star-light.svg"
      alt="star"
      className="w-4 h-4 block dark:hidden"
    />
  ));

  const darkStars = Array.from({ length: rating }, (_, i) => (
    <img
      key={i}
      src="src/assets/icons/star-dark.svg"
      alt="star-dark"
      className="w-4 h-4 hidden dark:block"
    />
  ));

  return (
    <div className="font-yekan-bakh bg-[var(--color-base-side-light)] dark:bg-[var(--color-base-side-dark)] rounded-lg p-4 flex flex-col w-3/4 mr-25 gap-2 text-right transition-colors duration-300">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
        <span>{date}</span>
      </div>

      <p className="text-gray-700 dark:text-gray-100 leading-relaxed">{text}</p>

      <div className="flex">{stars}{darkStars}</div>
    </div>
  );
};

export default CommentItem;
