const BadgeSmall = () => {
  return (
    <div className="flex items-center justify-center py-0.5 px-2 max-w-24 max-h-5 rounded-full bg-primary-dark">
      <span className="font-normal leading-4 text-[11px] text-primary-lighter">
        ۱۰,۰۰۰ تومان
      </span>
    </div>
  );
};

const BadgeBig = () => {
  return (
    <div className="flex items-center justify-center py-0.5 px-2.5 max-w-24 max-h-6 rounded-full bg-primary-dark">
      <span className="font-normal leading-5 text-xs text-primary-lighter">
        ۱۰,۰۰۰ تومان
      </span>
    </div>
  );
};

export { BadgeSmall, BadgeBig };
