import allProductsSamples from "../../constants/all-products-samples";
import AllProductsCard from "./AllProductsCard";
const AllProductsMain: React.FC = () => {
  return (
    <div className="font-yekan-bakh flex flex-wrap gap-8 justify-center h-fit">
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
