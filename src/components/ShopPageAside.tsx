import { useEffect, useState } from "react";
import FilterHeading from "./ui/FilterHeading";
import Filter from "./ui/Filter";
import { getCategoryList } from "../api/requests/categoryList";

interface Category {
  _id: string;
  name: string;
}

interface ShowPageAsideProps {
  categoriesFilter: string[];
  onCategoryChange: (id: string, checked: boolean) => void;
  priceFilter: string;
  onPriceChange: (value: string) => void;
  onClearFilters: () => void;
}

const ShowPageAside = ({
  categoriesFilter,
  onCategoryChange,
  priceFilter,
  onPriceChange,
  onClearFilters,
}: ShowPageAsideProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data: Category[] = await getCategoryList();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <aside className="flex-shrink-0 w-[264px] h-fit bg-base-side-light flex items-center flex-col justify-start mr-60 dark:bg-[var(--color-base-side-dark)]">
      <div className="relative flex flex-col gap-10 w-60 top-3">
        <div className="flex flex-col gap-7">
          <FilterHeading title="فیلتر برند" />
          <Filter
            categories={categories}
            selectedCategories={categoriesFilter}
            onChange={onCategoryChange}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <FilterHeading title="فیلتر قیمت" />
          <div className="p-5 text-sm">
            <input
              className="bg-on-primary-light w-50 h-[42px] rounded-lg py-2.5 px-3.5 focus:outline-primary-main"
              type="text"
              name="priceFilter"
              value={priceFilter}
              onChange={(e) => onPriceChange(e.target.value)}
              placeholder="قیمت را وارد نمایید"
            />
          </div>
        </div>
      </div>

      <div className="flex px-5 gap-2.5 mt-3.5">
        <button
          className="cursor-pointer w-50 h-7 rounded-sm mb-3.5 border border-neutral-dark-600 dark:text-[var(--color-on-primary-light)]"
          onClick={onClearFilters}
        >
          حذف فیلتر ها
        </button>
      </div>
    </aside>
  );
};

export default ShowPageAside;
