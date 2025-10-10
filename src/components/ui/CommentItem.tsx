import React from "react";

interface CommentItemProps {
  name: string;
  date: string;
  text: string;
  rating: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ name, date, text, rating }) => {
  return (
    <div className=" font-yekan-bakh bg-gray-100 dark:bg-[var(--color-base-side-dark)] rounded-lg p-4 flex flex-col gap-2 text-right transition-colors duration-300">
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        
        <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
        <span>{date}</span>
      </div>

      <p className="text-gray-700 dark:text-gray-100 leading-relaxed">{text}</p>

      <div id="stars" className="flex flex-row">
                <img
                  src="src/assets/icons/half-star-light.svg"
                  alt="half-star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="src/assets/icons/half-star-dark.svg"
                  alt="half-star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="src/assets/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="src/assets/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="src/assets/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
                <img
                  src="src/assets/icons/star-light.svg"
                  alt="star-light"
                  className="max-w-4 block dark:hidden"
                />
                <img
                  src="src/assets/icons/star-dark.svg"
                  alt="star-dark"
                  className="max-w-4 hidden dark:block"
                />
              </div>
            </div>
     
  );
};

export default CommentItem;
