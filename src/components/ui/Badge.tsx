import React from "react";
interface BadgeProps {
  size: "small" | "big";
  children: React.ReactNode;
}

const Badge = ({ size = "small", children = "۱۰,۰۰۰ تومان" }: BadgeProps) => {
  const sizeClasses =
    size === "big"
      ? "leading-5 text-xs py-0.5 px-2.5 max-h-6"
      : "leading-4 text-[11px] py-0.5 px-2 max-h-5";

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary-dark ${sizeClasses}`}
    >
      <span className="font-normal leading-5 text-xs text-primary-lighter">
        {children}
      </span>
    </div>
  );
};

export default Badge;
