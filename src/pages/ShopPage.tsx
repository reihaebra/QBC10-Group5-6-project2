import Sidebar from "../components/ui/Sidebar";
import ShowPageAside from "../components/ShopPageAside";
import ShopPageProducts from "../components/ShopPageProducts";
import UserDropdown from "../components/ui/UserDropdown";

const ShopPage = () => {
  return (
    <div className="flex bg-background-base-light justify-between font-yekan-bakh dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div className="relative flex flex-row gap-16 top-8 justify-center font-YekanBakh text-black bg-background-base-light h-auto w-[calc(100vw-156px)] dark:bg-[var(--color-background-primary-dark)] dark:text-white">
        <ShowPageAside />
        <ShopPageProducts />
      </div>
    </div>
  );
};

export default ShopPage;
