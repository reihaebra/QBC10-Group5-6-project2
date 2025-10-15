import Sidebar from "../components/ui/Sidebar";
import ShowPageAside from "../components/ShopPageAside";
import ShopPageProducts from "../components/ShopPageProducts";
const ShopPage = () => {
  return (
    <div className="flex  bg-background-base-light justify-between font-yekan-bakh dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar />
      <div className="relative flex flex-row gap-16 top-8 justify-center font-YekanBakh text-black">
        <ShowPageAside />
        <ShopPageProducts />
      </div>
    </div>
  );
};

export default ShopPage;
