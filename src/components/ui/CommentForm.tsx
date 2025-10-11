import React, { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

interface CommentFormProps {
  onSubmit: (comment: {
    name: string;
    date: string;
    text: string;
    rating: number;
  }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !comment || rating === null) {
      alert("لطفاً همه فیلدها را پر کنید");
      return;
    }

    const newComment = {
      name,
      date: new Date().toLocaleDateString("fa-IR"),
      text: comment,
      rating,
    };

    onSubmit(newComment);
    setName("");
    setRating(null);
    setComment("");
  };

  const handleSelect = (value: number) => {
    setRating(value);
    setIsOpen(false);
  };

  return (
    <div className="font-yekan-bakh">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg p-4 flex flex-col gap-6 mr-40 text-right transition-colors duration-300 relative"
      >
        <div className="relative">
          <label className="block text-gray-700 dark:text-gray-200 mb-1 border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]">
            امتیاز
          </label>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer w-1/2 rounded-md border border-gray-300 dark:border-neutral-700 
                        bg-white dark:bg-[var(--color-base-text-field-dark)] text-gray-900 dark:text-gray-100 
                        px-3 py-2 pr-4 flex justify-between items-center focus:outline-none focus:ring-2 `}
          >
            <span
              className={`${
                rating === null
                  ? "text-gray-400 dark:text-gray-400"
                  : "text-gray-900 dark:text-gray-100"
              }`}
            >
              {rating === null ? "انتخاب امتیاز" : `امتیاز: ${rating}`}
            </span>

            <img
    src="src/assets/icons/chevron_left_light.svg"
    alt="فلش"
    className={`w-4 h-4 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    } dark:hidden`} 
  />

  {/* عکس برای حالت دارک */}
  <img
    src="src/assets/icons/chevron_left_dark.svg"
    alt="فلش تیره"
    className={`w-4 h-4 transition-transform duration-200 ${
      isOpen ? "rotate-180" : ""
    } hidden dark:block`} />
          </div>

          {isOpen && (
            <ul
              className="absolute z-10 mt-1 w-1/2 bg-white dark:bg-neutral-900 border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]
                         rounded-md shadow-md max-h-48 overflow-auto"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <li
                  key={num}
                  onClick={() => handleSelect(num)}
                  className="px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-[var(--color-primary-hover-dark)] hover:text-[var(--color-primary-main)] cursor-pointer transition-colors"
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-5">
          <label className="block text-gray-700 dark:text-gray-200 mb-1">
            نظر
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="نظر خود را وارد نمایید"
            className="w-1/2 rounded-md border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)] bg-white dark:bg-[var(--color-base-text-field-dark)] text-gray-900 dark:text-gray-100 px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400 dark:placeholder-gray-400"
          />
        </div>

        
        <div className="self-start inline-block">
  <ButtonPrimary
    text="ثبت نظر"
    handleClick={handleSubmit}
  />
</div>


      </form>
    </div>
  );
};

export default CommentForm;
