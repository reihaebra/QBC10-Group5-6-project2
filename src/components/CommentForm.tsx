import { useState } from "react";
import ButtonPrimary from "./ui/ButtonPrimary";

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

    if (!comment || rating === null) {
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
        className="rounded-lg flex flex-col gap-6 transition-colors duration-300"
      >
        <div>
          <label
            className="block text-primary-text-light dark:text-[var(--color-on-primary-light)] 
          mb-2 border-[var(--color-input-light)] dark:border-[var(--color-input-dark)]"
          >
            امتیاز
          </label>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer w-xl text-primary-text-light bg-on-primary-light 
            border border-input-light rounded-lg placeholder-secondary-light outline-none
            focus:border-input-active dark:text-[var(--color-on-primary-light)] 
            dark:placeholder-[var(--color-secondary-dark)] dark:bg-[var(--color-base-text-field-dark)] dark:border-[var(--color-input-dark)]
            px-3 py-2 pr-4 flex justify-between items-center`}
          >
            <span
              className={`${
                rating === null
                  ? "text-secondary-light dark:text-[var(--color-secondary-dark)]"
                  : "text-gray-900 dark:text-gray-100"
              }`}
            >
              {rating === null ? "انتخاب امتیاز" : `امتیاز: ${rating}`}
            </span>

            <img
              src="../../public/icons/chevron_left_light.svg"
              alt="فلش"
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } dark:hidden`}
            />

            <img
              src="../../public/icons/chevron_left_dark.svg"
              alt="فلش تیره"
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              } hidden dark:block`}
            />
          </div>

          {isOpen && (
            <ul
              className="absolute z-10 mt-1 w-xl text-primary-text-light dark:text-[var(--color-on-primary-light)] 
              bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)] border border-[var(--color-input-light)] 
              dark:border-[var(--color-input-dark)]
              rounded-lg shadow-md max-h-48 overflow-auto"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <li
                  key={num}
                  onClick={() => handleSelect(num)}
                  className="px-4 py-2 text-primary-text-light dark:text-[var(--color-on-primary-light)]
                  hover:bg-[var(--color-primary-hover-dark)] 
                  hover:text-[var(--color-primary-main)] cursor-pointer transition-colors"
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col items-start gap-2 w-xl">
          <label className="font-normal text-base leading-6 text-primary-text-light dark:text-[var(--color-on-primary-light)]">
            نظر
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="نظر خود را وارد نمایید"
            className="px-3 py-2 w-full h-28 resize-none text-secondary-light bg-on-primary-light 
            border border-input-light rounded-lg placeholder-secondary-light outline-none disabled:bg-input-light 
            focus:border-input-active dark:disabled:bg-[var(--color-input-dark)] dark:text-[var(--color-secondary-dark)] 
            dark:placeholder-[var(--color-secondary-dark)] dark:bg-[var(--color-base-text-field-dark)] dark:border-[var(--color-input-dark)]"
          />
        </div>

        <div className="self-start">
          <ButtonPrimary text="ثبت نظر" handleClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
