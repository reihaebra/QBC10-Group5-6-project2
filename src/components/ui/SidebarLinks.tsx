import React from "react";

interface SidebarLinksProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ activeSection, onSelect }) => {
  const links = [
    { id: "add", label: "ثبت نظر" },
    { id: "view", label: "مشاهده نظرات" },
    { id: "related", label: "محصولات مرتبط" },
  ];

  return (
    <div className="font-yekan-bakh flex flex-col items-start text-right space-y-4 pr-4 rtl mt-5 mr-10">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onSelect(link.id)}
          className={`text-base transition-all duration-200 ${
            activeSection === link.id
              ? "font-bold text-gray-900 dark:text-white"
              : "font-normal text-gray-700 dark:text-gray-400"
          }`}
          style={{ direction: "rtl" }}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarLinks;
