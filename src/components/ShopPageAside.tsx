import { useEffect, useState } from "react";
import FilterHeading from "./ui/FilterHeading";
import Filter from "./ui/Filter";
import { getCategoryList } from "../api/requests/CategoryList";
interface Category {
  _id: string;
  name: string;
}
const ShowPageAside = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("");
  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
    
  };
  useEffect(() => {
    const fetchCategories = async () => {
      const data: Category[] = await getCategoryList();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const clearFilters = () => {
    console.log(selectedCategories);
    setSelectedCategories([]);
    setPriceFilter("");
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(e.target.value);
  };

  return (
<<<<<<< HEAD
    <aside className=" flex-shrink-0 w-[264px] h-[810px] bg-base-side-light flex items-center flex-col justify-start mr-60 dark:bg-[var(--color-base-side-dark)]">
      <div className="relative flex flex-col gap-4 w-60 top-3">
        <div className="flex flex-col gap-2 ">
=======
    <aside className=" flex-shrink-0 w-[264px] h-fit bg-base-side-light flex items-center flex-col justify-start mr-60 dark:bg-[var(--color-base-side-dark)]">
      <div className="relative flex flex-col gap-10 w-60 top-3">
        <div className="flex flex-col gap-7 ">
>>>>>>> 694fe23bca11e0965ec63700cb3d19b8bfd8232c
          <FilterHeading title="فیلتر برند" />
          <Filter
            categories={categories}
            selectedCategories={selectedCategories}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="flex flex-col gap-1.5 ">
          <FilterHeading title="فیلتر قیمت" />
          <div className="p-5 text-sm">
            <input
              className="bg-on-primary-light w-50 h-[42px] rounded-lg py-2.5 px-3.5 focus:outline-primary-main"
              type="text"
              name="priceFilter"
              value={priceFilter}
              onChange={handlePriceChange}
              placeholder="قیمت را وارد نمایید"
            />
          </div>
        </div>
      </div>
      <div className="flex px-5 gap-2.5 mt-3.5">
<<<<<<< HEAD
        <button className=" cursor-pointer w-50 h-7 rounded-sm border border-neutral-dark-600 dark:text-[var(--color-on-primary-light)]">
=======
        <button
          className="cursor-pointer w-50 h-7 rounded-sm mb-3.5  border border-neutral-dark-600 dark:text-[var(--color-on-primary-light)]"
          onClick={clearFilters}
        >
>>>>>>> 694fe23bca11e0965ec63700cb3d19b8bfd8232c
          حذف فیلتر ها
        </button>
      </div>
    </aside>
  );
};

export default ShowPageAside;
