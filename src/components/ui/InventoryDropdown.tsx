import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

export const InventoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems: number[] = [1, 2, 3, 4, 5];

  const handleSelect = (item: number): void => {
    setSelectedItem(item);
    setOpen(false);
  };

  const getMenuPosition = () => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      return {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      };
    }
    return { top: 0, left: 0 };
  };

  const { top, left } = getMenuPosition();

  return (
    <div
      className="flex flex-col items-start font-yekan-bakh text-base text-regular relative"
      ref={menuRef}
    >
      <div
        className="inline-flex w-24 h-10 justify-between items-center gap-2 cursor-pointer select-none border border-[var(--color-input-light)] dark:border-[var(--color-input-dark)] rounded-md px-3 bg-white dark:bg-[var(--color-base-side-dark)]"
        onClick={() => setOpen(!open)}
      >
        <img
          src="src/assets/icons/sidebar-more-light.svg"
          alt="arrow"
          className={`w-4 h-4 block dark:hidden transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        <img
          src="src/assets/icons/sidebar-more-dark.svg"
          alt="arrow"
          className={`w-4 h-4 hidden dark:block transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        <span className="text-primary-text-light dark:text-white">
          {selectedItem}
        </span>
      </div>

      {open &&
        createPortal(
          <div
            className="fixed"
            style={{ top: `${top}px`, left: `${left}px` }}
            onMouseLeave={() => setOpen(false)}
          >
            <ul
              className={`flex flex-col bg-white border border-[var(--color-input-light)] text-primary-text-light
                w-24 py-2 px-2 dark:text-white dark:bg-[var(--color-base-side-dark)] dark:border-[var(--color-input-dark)]
                rounded-md transition-all duration-300 overflow-y-auto  z-[1000] shadow-lg`}
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
          </div>,
          document.body
        )}
    </div>
  );
};

export default InventoryDropdown;
