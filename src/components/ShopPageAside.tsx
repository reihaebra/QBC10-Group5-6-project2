import { useState } from "react";
import ShopPage_button from "./ShopPageButton";
import FilterHeading from "./ui/FilterHeading";
import Filter from "./ui/Filter";
const ShowPageAside = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <aside className=" w-[264px] h-[810px] bg-base-side-light flex items-center flex-col justify-start">
      <div className="relative flex flex-col gap-10 w-60 top-3">
        <div className="flex flex-col gap-7">
          <FilterHeading title="فیلتر برند" />
          <Filter />
        </div>
        <div className="flex flex-col gap-1.5 ">
          <FilterHeading title="فیلتر قیمت" />
          <div className="p-5 text-sm">
            <input
              className="bg-on-primary-light w-50 h-[42px] rounded-lg py-[10px] px-3.5"
              type="text"
              name=""
              id=""
              placeholder="قیمت را وارد نمایید"
            />
          </div>
        </div>
      </div>
      <div className="flex px-5 gap-2.5">
        <button className="cursor-pointer w-50 h-7 rounded-sm  border border-neutral-dark-600">
          حذف فیلتر ها
        </button>
      </div>
    </aside>
  );
};

export default ShowPageAside;
