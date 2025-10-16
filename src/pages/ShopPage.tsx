import Sidebar from "../components/ui/Sidebar";
import ShowPageAside from "../components/ShopPageAside";
import ShopPageProducts from "../components/ShopPageProducts";
import UserDropdown from "../components/ui/UserDropdown";
import { useState } from "react";

const ShopPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("");

  const handleCategoryChange = (id: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handlePriceChange = (value: string) => {
    setPriceFilter(value);
  };

  const clearFilters = () => {
    console.log(selectedCategories);
    setSelectedCategories([]);
    setPriceFilter("");
  };

  return (
    <div className="flex bg-background-base-light h-screen  justify-between font-yekan-bakh dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar>
        <UserDropdown />
      </Sidebar>

      <div className="relative flex flex-row gap-16  h-screen top-8 font-YekanBakh text-black bg-background-base-light  w-screen dark:bg-[var(--color-background-primary-dark)] dark:text-white">
        <ShowPageAside
          categoriesFilter={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceFilter={priceFilter}
          onPriceChange={handlePriceChange}
          onClearFilters={clearFilters}
        />

        <ShopPageProducts
          selectedCategories={selectedCategories}
          priceFilter={priceFilter}
        />
      </div>
    </div>
  );
};

export default ShopPage;
