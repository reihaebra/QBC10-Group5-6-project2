import AllProductsMain from "../components/AllProductsMain";
import Sidebar from "../components/ui/Sidebar";
const AllProducts: React.FC = () => {
  return (
    <div className="flex flex-row pr-32 bg-background-base-light justify-between dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar />

      <AllProductsMain />
    </div>
  );
};

export default AllProducts;
