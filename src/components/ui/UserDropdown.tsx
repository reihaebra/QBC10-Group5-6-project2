import React from "react";
import { useState } from "react";

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);

  const menuItems = ["پروفایل", "خروج از حساب"];

  return (
    <div className="p-4 flex flex-col items-start font-yekan-bakh text-base text-regular">
      <div
        className="flex items-center gap-4 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-primary-text-light dark:text-primary-text-dark">
          کابر
        </span>
        <img
          src="src/assets/icons/sidebar-more-light.svg"
          alt="admin"
          className={`w-3 h-3 block dark:hidden transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        <img
          src="src/assets/icons/sidebar-more-dark.svg"
          alt="admin"
          className={`w-3 h-3 hidden dark:block transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div className="relative">
        <ul
          className={`absolute bottom-full mb-8 flex flex-col bg-card-light border border-border-text-field-dark text-primary-text-light
            gap-2 w-40 py-4 px-2 dark:text-primary-text-dark dark:bg-base-side-dark
              rounded-box transition-all duration-300 overflow-hidden ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`hover:bg-primary-hover-dark hover:text-primary-light p-2 rounded-md transition-all duration-200 delay-[${
                index * 50
              }ms]`}
            >
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
