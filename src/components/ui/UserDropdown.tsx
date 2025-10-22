import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Check role
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // Admin menu items
  const adminMenuItems = [
    { label: "داشبورد", path: "/admin/dashboard" },
    { label: "محصول جدید", path: "/admin/products/new" },
    { label: "مدیریت کاربران", path: "/admin/all-users" },
    { label: "سفارشات", path: "/admin/orders" },
    { label: "پروفایل", path: "/profile" },
    { label: "خروج از حساب", path: "/login" },
  ];

  // User menu items
  const userMenuItems = [
    { label: "پروفایل", path: "/profile" },
    { label: "خروج از حساب", path: "/login" },
  ];

// Regular User or Admin?
  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  // Handle logout
  const handleLogout = async () => {
    try {
      try {
        const authModule = (await import("../../api/requests/auth")) as any;
        if (authModule && typeof authModule.logoutUser === "function") {
          await authModule.logoutUser();
        }
      } catch (_) {
        //optional 
      }

      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("isAdmin");

      const setCookieZero = (name: string) => {
        document.cookie = `${name}=0; Max-Age=0; path=/;`;
        document.cookie = `${name}=0; Max-Age=0; path=/; domain=${location.hostname};`;
      };
      ["jwt", "token", "access_token"].forEach(setCookieZero);

      setOpen(false);
      toast.success("با موفقیت از حساب خارج شدید");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("مشکلی در خروج از حساب پیش آمد");
    }
  };

  return (
    <div className="p-4 flex flex-col items-start font-yekan-bakh text-base text-regular relative">
      <div
        className="flex items-center gap-4 cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <span className="text-primary-text-light dark:text-white">{isAdmin ? "ادمین" : "کاربر"}</span>
        <img
          src="../../public/icons/sidebar-more-light.svg"
          alt="user"
          className={`w-3 h-3 block dark:hidden transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
        <img
          src="../../public/icons/sidebar-more-dark.svg"
          alt="user"
          className={`w-3 h-3 hidden dark:block transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <div className="relative" onMouseLeave={() => setOpen(false)}>
        <ul
          className={`absolute bottom-full mb-8 flex flex-col bg-card-light border border-base-text-field-dark text-primary-text-light
            gap-2 w-40 py-4 px-2 dark:text-white dark:bg-[var(--color-base-side-dark)]
            rounded-box transition-all duration-300 overflow-hidden z-10 ${
              open
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`hover:bg-primary-hover-dark hover:text-primary-main p-2 rounded-md transition-all duration-200 delay-[${
                index * 50
              }ms]`}
            >
              {item.label === "خروج از حساب" ? (
                <NavLink
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  {item.label}
                </NavLink>
              ) : (
                <NavLink to={item.path}>{item.label}</NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;