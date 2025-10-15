import allProductsSamples from "../../constants/all-products-samples";
import AllProductsCard from "./AllProductsCard";
const AllProductsMain: React.FC = () => {
  return (
    <div className="relative top-[107px] flex flex-row flex-wrap gap-8 h-fit justify-center">
      {allProductsSamples.map((product) => {
        const { id, title, description, price, imageUrl } = product;
        return (
          <AllProductsCard
            key={id}
            description={description}
            title={title}
            price={price}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
};

export default AllProductsMain;
