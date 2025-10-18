import { useEffect, useRef, useState } from "react";
import AllProductsCard from "./AllProductsCard";
import { getAllProducts } from "../api/requests/products";
import Pagination from "./Pagination";

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
      try {
        const data = await getAllProducts();
        setAllProducts(data);
        totalPages.current = Math.ceil(data.length / itemsPerPage);

        // تنظیم صفحه اول
        setVisibleProducts(data.slice(0, itemsPerPage));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleProducts(allProducts.slice(startIndex, endIndex));
  }, [page, allProducts]);

  return (
    <div>
      <div className="font-yekan-bakh flex flex-wrap gap-8 justify-center h-fit">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, i) => (
              <div
                key={i}
                className="w-xl h-[180px] bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))
          : visibleProducts.map(
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
