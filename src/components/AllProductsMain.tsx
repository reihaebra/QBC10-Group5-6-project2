import { useEffect, useRef, useState } from "react";
import AllProductsCard from "./AllProductsCard";
import { getAllProducts } from "../api/requests/products";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

interface Product {
  _id?: number;
  name: string;
  description: string;
  price: string;
  image: string;
  createdAt: string;
}

const AllProductsMain: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = useRef(1);

  useEffect(() => {
    const getData = async () => {
      const nowTimeStamp = new Date().getTime();
      try {
        const data = await getAllProducts();
        setAllProducts(data);
        totalPages.current = Math.ceil(data.length / itemsPerPage);
        setVisibleProducts(data.slice(0, itemsPerPage));
      } catch (error: any) {
        if (error.code === "ECONNABORTED") {
          console.error("Request timed out:", error.message);
        }
        console.error("Error fetching products:", error);
      } finally {
        const elapsed = new Date().getTime() - nowTimeStamp;
        setTimeout(() => {
          setLoading(false);
        }, Math.max(0, 500 - elapsed));
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleProducts(allProducts.slice(startIndex, endIndex));
  }, [page, allProducts]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="font-yekan-bakh flex flex-wrap gap-8 justify-center h-fit">
        {visibleProducts.map(
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
      <div className="flex justify-center ">
        {allProducts.length > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages.current}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default AllProductsMain;
