import { useState } from "react";
import ShopPage_button from "./ShopPageButton";
const ShopPage_aside = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <aside className=" w-[264px] h-[810px] bg-base-side-light flex items-center flex-col justify-start">
      {/* aside container */}
      <div className="relative flex flex-col gap-10 w-60 top-3">
        {/* filter for brands */}
        <div className="flex flex-col gap-7">
          <ShopPage_button>فیلتر برند</ShopPage_button>
          <div className="flex gap-4 flex-col ">
            <label className="flex flex-row gap-2 px-5">
              <input
                type="radio"
                name="color"
                value="apple"
                checked={selectedOption === "apple"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <span className="text-sm">Apple</span>
            </label>

            <label className="flex flex-row gap-2 px-5">
              <input
                type="radio"
                name="color"
                value="microsoft"
                checked={selectedOption === "microsoft"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <span className="text-sm">Microsoft</span>
            </label>
          </div>
        </div>
        {/* filter for price */}
        <div className="flex flex-col gap-1.5 ">
          <ShopPage_button> فیلتر قیمت </ShopPage_button>

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
      {/* remove button for filters */}
      <div className="flex px-5 gap-2.5">
        <button className="cursor-pointer w-50 h-7 rounded-sm  border border-neutral-dark-600">
          حذف فیلتر ها
        </button>
      </div>
    </aside>
  );
};

export default ShopPage_aside;
