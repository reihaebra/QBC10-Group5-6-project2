
interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center gap-3 mt-6 self-start">
      {/* دکمه قبلی */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="px-3 py-2 w-16 bg-card-light dark:bg-[var(--color-shop-card-dark)] rounded-md 
        disabled:opacity-50 hover:bg-primary-main hover:text-white transition cursor-pointer dark:hover:bg-[var(--color-primary-dark)]"
      >
        قبلی
      </button>

      {/* شماره صفحات */}
      <div className="flex gap-2">
        {Array.from({ length: totalPages || 0 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition cursor-pointer
              ${
                page === num
                  ? "bg-primary-lighter text-black"
                  : "bg-white border border-gray-300 text-black hover:bg-primary-lighter"
              }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* دکمه بعدی */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-3 py-2 w-16 bg-card-light dark:bg-[var(--color-shop-card-dark)] rounded-md 
        disabled:opacity-50 hover:bg-primary-main hover:text-white transition cursor-pointer dark:hover:bg-[var(--color-primary-dark)]"
      >
        بعدی
      </button>
    </div>
  );
};

export default Pagination;
