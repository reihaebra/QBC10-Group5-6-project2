import AllProductsMain from "../components/AllProductsMain";
import SidebarDropdown from "../components/ui/SidebarDropdown";
import Sidebar from "../components/ui/Sidebar";

const AllProducts: React.FC = () => {
  return (
    <div
      className="flex pr-32 pl-16 py-8 min-h-screen h-full bg-background-base-light 
    justify-between dark:bg-[var(--color-background-primary-dark)]"
    >
      <Sidebar>
        <SidebarDropdown />
      </Sidebar>

      <AllProductsMain />
    </div>
  );
};

export default AllProducts;
