import React from "react";
import { useState } from "react";

const menuItems = [
  { name: "sidebar-home", label: "داشبورد" },
  { name: "sidebar-shop", label: "فروشگاه" },
  { name: "sidebar-shopping-card", label: "سبد خرید" },
  { name: "sidebar-favorite", label: "علاقه‌مندی‌ها" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`
        h-screen flex flex-col justify-between font-yekan-bakh font-normal
        bg-on-primary-light text-primary-text-light
        dark:bg-primary-text-light dark:text-primary-text-dark
        transition-all duration-300
        ${isExpanded ? "w-80" : "w-24"}
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col gap-4 p-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 p-2 hover:bg-primary-hover-dark rounded transition-colors duration-200"
          >
            <img
              src={`src/assets/icons/${item.name}-light.svg`}
              alt={item.label}
              className={`${
                isExpanded ? "w-6 h-6" : "w-6 h-6 mx-auto"
              } block dark:hidden`}
            />
            <img
              src={`src/assets/icons/${item.name}-dark.svg`}
              alt={item.label}
              className={`${
                isExpanded ? "w-6 h-6" : "w-6 h-6 mx-auto"
              } hidden dark:block`}
            />

            {isExpanded && (
              <h5 className="text-base font-normal">{item.label}</h5>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
