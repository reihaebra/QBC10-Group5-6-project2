import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  children?: ReactNode;
};

const menuItems = [
  { name: "sidebar-home", label: "خانه", path: "/user/home" },
  { name: "sidebar-shop", label: "فروشگاه", path: "/user/shop" },
  { name: "sidebar-shopping-card", label: "سبد خرید", path: "/user/cart" },
  { name: "sidebar-favorite", label: "علاقه‌مندی‌ها", path: "/user/favorites" },
];

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`
        fixed top-0 right-0 h-screen flex flex-col justify-between font-yekan-bakh font-normal
        bg-on-primary-light text-primary-text-light
        dark:bg-black dark:text-white
        transition-all duration-300
        ${isExpanded ? "w-80" : "w-24"}  z-50
      `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col gap-4 p-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="flex items-center gap-2 p-2 hover:bg-primary-hover-dark hover:text-primary-main rounded transition-colors duration-200"
          >
            <img
              src={`../../public/icons/${item.name}-light.svg`}
              alt={item.label}
              className={`${
                isExpanded ? "w-6 h-6" : "w-6 h-6 mx-auto"
              } block dark:hidden`}
            />
            <img
              src={`../../public/icons/${item.name}-dark.svg`}
              alt={item.label}
              className={`${
                isExpanded ? "w-6 h-6" : "w-6 h-6 mx-auto"
              } hidden dark:block`}
            />

            {isExpanded && (
              <h5 className="text-base font-normal">{item.label}</h5>
            )}
          </NavLink>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
