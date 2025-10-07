import AllProductsMain from "../components/AllProductsMain";
import Sidebar from "../components/ui/Sidebar";
const AllProducts: React.FC = () => {
  return (
    <div className="flex flex-row justify-between">
      <Sidebar />

      <AllProductsMain />
    </div>
  );
};

export default AllProducts;
