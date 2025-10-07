import Sidebar from "../components/ui/Sidebar";
import ShopPage_aside from "../components/ShopPageAside";
import ShopPage_Products from "../components/ShopPageProducts";
const ShopPage = () => {
  return (
    <div className="flex  bg-background-base-light justify-between font-yekan-bakh">
      {/* <div className="justify-self-start">
        <Sidebar />
      </div> */}
      <Sidebar />
      {/* main + aside */}
      <div className="relative flex flex-row gap-16 top-8 left-[156px] justify-center font-YekanBakh text-black">
        {/* aside */}
        <ShopPage_aside />
        {/* products card */}
        <ShopPage_Products />
      </div>
    </div>
  );
};

export default ShopPage;
