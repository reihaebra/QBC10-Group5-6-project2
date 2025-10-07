import React from "react";
const ButtonMore = () => {
  return (
    <button className="flex items-center gap-2 px-3 py-2 bg-primary-main rounded-lg cursor-pointer  hover:bg-primary-dark">
      <span className="font-normal text-sm text-on-primary-light">
        مشاهده بیشتر
      </span>
      <img src="./src/assets/icons/left-arrow.svg" alt="left-arrow" />
    </button>
  );
};

export default ButtonMore;
