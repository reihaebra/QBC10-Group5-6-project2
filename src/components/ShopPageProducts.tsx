import ShopProductCard from "./ui/ShopProductCard";
import data from "../../constants/shop-page-sample";
import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../api/requests/products";
import { getProductsPagination } from "../api/requests/productsPagination";
import { getFilteredProducts } from "../api/requests/filteredProducts";
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
            />
          ))
        ) : (
          <p>محصولی یافت نشد.</p>
        )}
      </section>
      {selectedCategories.length === 0 && !priceFilter && (
        <div className="flex items-center gap-3 mt-6 self-start">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-2 w-16 bg-card-light dark:bg-[var(--color-shop-card-dark)] rounded-md disabled:opacity-50 
            hover:bg-primary-main hover:text-white transition cursor-pointer dark:hover:bg-[var(--color-primary-dark)]"
          >
            قبلی
          </button>

          <div className="flex gap-2">
            {Array.from(
              { length: pageNumbers.current || 0 },
              (_, i) => i + 1
            ).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition cursor-pointer text-black
            ${
              page === num
                ? "bg-primary-lighter"
                : "bg-white border-gray-300 hover:bg-primary-lighter"
            }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            disabled={page === pageNumbers.current}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-2 w-16 bg-card-light dark:bg-[var(--color-shop-card-dark)] rounded-md 
            disabled:opacity-50 hover:bg-primary-main hover:text-white transition cursor-pointer dark:hover:bg-[var(--color-primary-dark)]"
          >
            بعدی
          </button>
        </div>
      )}
    </main>
  );
};

export default ShopPageProducts;
