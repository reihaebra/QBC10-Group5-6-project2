import React from "react";
import { useState } from "react";
type Item = {
  name: string;
  label: string;
};

const menuItems = [
  { name: "sidebar-home", label: "داشبورد" },
  { name: "sidebar-shop", label: "فروشگاه" },
  { name: "sidebar-shopping-card", label: "سبد خرید" },
  { name: "sidebar-favorite", label: "علاقه‌مندی‌ها" },
];

const authItems = [
  { name: "sidebar-login", label: "ورود" },
  { name: "sidebar-register", label: "ثبت نام" },
];

const LoginRegister = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderItems = (items: Item[]) =>
    items.map((item, index) => (
      <button
        key={index}
        className="flex items-center gap-2 p-2 hover:bg-primary-hover-dark hover:text-primary-main
hover:text-primary-main rounded transition-colors duration-200"
      >
        <img
          src={`/src/assets/icons/${item.name}-light.svg`}
          alt={item.label}
          className="w-6 h-6 block dark:hidden"
        />
        <img
          src={`/src/assets/icons/${item.name}-dark.svg`}
          alt={item.label}
          className="w-6 h-6 hidden dark:block"
        />

        <span
          className={`text-base font-normal overflow-hidden whitespace-nowrap transition-all duration-300 ${
            isExpanded ? "opacity-100 ml-2" : "opacity-0 ml-0 w-0"
          }`}
        >
          {item.label}
        </span>
      </button>
    ));

  return (
    <div
      className={`
        fixed top-0 right-0 h-screen flex flex-col justify-between font-yekan-bakh font-normal
        bg-on-primary-light text-primary-text-light pr-4
        dark:bg-black dark:text-white
        transition-all duration-300 
        ${isExpanded ? "w-80" : "w-24"} z-50
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col gap-4 p-2">{renderItems(menuItems)}</div>

      <div className="flex flex-col gap-2 p-2 mb-4">
        {renderItems(authItems)}
      </div>
    </div>
  );
};

export default LoginRegister;
