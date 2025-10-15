import AllProductsMain from "../components/AllProductsMain";
import AdminDropdown from "../components/ui/AdminDropdown";
import Sidebar from "../components/ui/Sidebar";

const AllProducts: React.FC = () => {
  return (
    <div className="flex flex-row pr-32 h-screen bg-background-base-light justify-between dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar>
        <AdminDropdown />
      </Sidebar>

      <AllProductsMain />
    </div>
  );
};

export default AllProducts;
