import { useEffect, useState } from "react";
import AllProductsCard from "./AllProductsCard";
import { getAllProducts } from "../api/requests/products";
interface Product {
  _id?: number;
  name: string;
  description: string;
  price: string;
  image: string;
  createdAt: string;
}

const AllProductsMain: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="font-yekan-bakh flex flex-wrap gap-8 justify-center h-fit">
      {loading
        ? Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-xl h-[250px] bg-gray-200 animate-pulse rounded-lg"
            ></div>
          ))
        : products.map(
            ({ _id, name, description, price, image, createdAt }) => (
              <AllProductsCard
                key={_id}
                description={description}
                name={name}
                price={price}
                imageUrl={image}
                createdAt={createdAt}
              />
            )
          )}
    </div>
  );
};

export default AllProductsMain;
