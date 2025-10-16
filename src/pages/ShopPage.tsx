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
    <div
      className="flex bg-background-base-light justify-between font-yekan-bakh 
    dark:bg-[var(--color-background-primary-dark)]"
    >
      <Sidebar>
        <UserDropdown />
      </Sidebar>

      <div
        className="flex gap-16 py-8 font-YekanBakh text-black bg-background-base-light
       dark:bg-[var(--color-background-primary-dark)] dark:text-white min-h-screen h-full pr-56"
      >
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
