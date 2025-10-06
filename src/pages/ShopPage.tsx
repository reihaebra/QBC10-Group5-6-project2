import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import ShopProductCard from "../components/ui/ShopProductCard";
const ShopPage = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex  bg-background-base-light justify-between">
      <div className="justify-self-start">
        <Sidebar />
      </div>
      {/* main + aside */}
      <div className="relative flex flex-row gap-16 top-8 justify-center font-YekanBakh text-black">
        {/* aside */}
        <aside className=" w-[264px] h-[810px] bg-base-side-light flex items-center flex-col justify-start">
          {/* aside container */}
          <div className="relative flex flex-col gap-10 w-60 top-3">
            {/* filter for brands */}
            <div className="flex flex-col gap-7">
              <button className="w-60 px-[65px] max-h-10 py-2 text-center bg-on-primary-light text-black rounded-[9999px] text-[16px]">
                فیلتر برند
              </button>
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
              <button className="w-60 px-[65px] max-h-10 py-2 text-center bg-on-primary-light text-black rounded-[9999px] text-[16px]">
                فیلتر قیمت
              </button>
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
        {/* products card */}
        <main className="flex flex-row flex-wrap gap-6 max-w-[1200px] h-fit">
          <ShopProductCard
            title="iPhone 14 Pro"
            onAddToCart={() => console.log("Added to cart!")}
          />
          <ShopProductCard
            title="iPhone 14 Pro"
            onAddToCart={() => console.log("Added to cart!")}
          />
          <ShopProductCard
            title="iPhone 14 Pro"
            onAddToCart={() => console.log("Added to cart!")}
          />
          <ShopProductCard
            title="iPhone 14 Pro"
            onAddToCart={() => console.log("Added to cart!")}
          />
          <ShopProductCard
            title="iPhone 14 Pro"
            onAddToCart={() => console.log("Added to cart!")}
          />
          <ShopProductCard
            title="iPhone 14 Pro"
            onAddToCart={() => console.log("Added to cart!")}
          />
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
