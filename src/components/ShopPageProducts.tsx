import ShopProductCard from "./ui/ShopProductCard";
import data from "../../constants/shop-page-sample";
import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../api/requests/products";
import { getProductsPagination } from "../api/requests/productsPagination";
import { getFilteredProducts } from "../api/requests/filteredProducts";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
interface ProductShopPage {
  _id: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
  price: string;
  description: string;
  image: string;
}
interface ShopPageProductsProps {
  selectedCategories: string[];
  priceFilter: string;
}

const ShopPageProducts = ({
  selectedCategories,
  priceFilter,
}: ShopPageProductsProps) => {
  const [products, setProducts] = useState<ProductShopPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageNumbers = useRef(1);
  const navigate = useNavigate();
  const handleShowMore = (productId: string) => {
    navigate(`/user/shop/${productId}`);
  };

  useEffect(() => {
    const fetchTotalProducts = async () => {
      const response = await getAllProducts();
      pageNumbers.current = Math.ceil(response.length / 6);
      console.log("Total pages:", pageNumbers.current);
    };
    fetchTotalProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (selectedCategories.length > 0 || priceFilter) {
          const response = await getFilteredProducts(
            selectedCategories,
            priceFilter ? [0, parseInt(priceFilter)] : [0, 20000000000]
          );
          setProducts(response);
          setHasMore(false);
        } else {
          const response = await getProductsPagination(page, 6);
          console.log(response);
          setHasMore(response.hasMore);
          console.log(hasMore);
          console.log(pageNumbers.current);
          setProducts(response.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page, selectedCategories, priceFilter]);

  if (loading) {
    return <p>در حال بارگذاری محصولات...</p>;
  }

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-row flex-wrap gap-6 max-w-[1200px]">
        {products.length > 0 ? (
          products.map((item) => (
            <ShopProductCard
              key={item._id}
              title={item.name}
              brand={item.category.name}
              price={item.price}
              description={item.description}
              imageUrl={item.image}
              onAddToCart={() => console.log(`${item.name} added to cart!`)}
              onShowMore={() => handleShowMore(item._id)}
            />
          ))
        ) : (
          <p>محصولی یافت نشد.</p>
        )}
      </section>
      {selectedCategories.length === 0 && !priceFilter && (
        <Pagination
          page={page}
          totalPages={pageNumbers.current}
          onPageChange={setPage}
        />
      )}
    </main>
  );
};

export default ShopPageProducts;
