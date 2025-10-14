import React, { useState } from "react";

export const AdminMenu = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);

  const menuItems: number[] = [1, 2, 3, 4, 5];

  const handleSelect = (item: number): void => {
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <div className="p-4 flex flex-col items-start font-yekan-bakh text-base text-regular relative">
      <div
        className="inline-flex w-24 h-10 justify-between items-center gap-2 cursor-pointer select-none border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)] rounded-md px-3 py-2 bg-white dark:bg-[var(--color-base-side-dark)]"
        onClick={() => setOpen(!open)}
      >
        <img
          src="../../public/icons/sidebar-more-light.svg"
          alt="arrow"
          className={`w-4 h-4 block dark:hidden transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        <img
          src="../../public/icons/sidebar-more-dark.svg"
          alt="arrow"
          className={`w-4 h-4 hidden dark:block transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        <span className="text-primary-text-light dark:text-white">
          {selectedItem}
        </span>
      </div>

      <div className="relative" onMouseLeave={() => setOpen(false)}>
        <ul
          className={`mt-2 flex flex-col bg-white border border-[var(--color-input-light)] text-primary-text-light
             w-24 py-2 px-2 dark:text-white dark:bg-[var(--color-base-side-dark)] dark:border-[var(--color-input-dark)]
            rounded-md transition-all duration-300 overflow-hidden z-10 shadow-lg ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="hover:bg-primary-hover-dark hover:text-primary-main p-2 rounded-md transition-all duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
