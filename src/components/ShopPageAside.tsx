import { useState } from "react";
import FilterHeading from "./ui/FilterHeading";
import Filter from "./ui/Filter";
const ShowPageAside = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <aside className=" flex-shrink-0 w-[264px] h-[810px] bg-base-side-light flex items-center flex-col justify-start mr-60 dark:bg-[var(--color-base-side-dark)]">
      <div className="relative flex flex-col gap-4 w-60 top-3">
        <div className="flex flex-col gap-2 ">
          <FilterHeading title="فیلتر برند" />
          <Filter />
        </div>
        <div className="flex flex-col gap-1.5 ">
          <FilterHeading title="فیلتر قیمت" />
          <div className="p-5 text-sm">
            <input
              className="bg-on-primary-light w-50 h-[42px] rounded-lg py-2.5 px-3.5 focus:outline-primary-main"
              type="text"
              name="priceFilter"
              placeholder="قیمت را وارد نمایید"
            />
          </div>
        </div>
      </div>
      <div className="flex px-5 gap-2.5 mt-3.5">
        <button className=" cursor-pointer w-50 h-7 rounded-sm border border-neutral-dark-600 dark:text-[var(--color-on-primary-light)]">
          حذف فیلتر ها
        </button>
      </div>
    </aside>
  );
};

export default ShowPageAside;
