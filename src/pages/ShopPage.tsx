import Sidebar from "../components/ui/Sidebar";
import ShowPageAside from "../components/ShopPageAside";
import ShopPageProducts from "../components/ShopPageProducts";
import SidebarDropdown from "../components/ui/SidebarDropdown";
import { useEffect, useRef, useState } from "react";
import { getAllProducts } from "../api/requests/products";
import { getProductsPagination } from "../api/requests/productsPagination";
import { getFilteredProducts } from "../api/requests/filteredProducts";
import Spinner from "../components/Spinner";
import { getProductCategory } from "../api/requests/productCategory";

export interface ProductShopPage {
  _id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const ShopPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string>("");
  const [products, setProducts] = useState<ProductShopPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const totalPages = useRef(1);

  useEffect(() => {
    const fetchTotalProducts = async () => {
      const response = await getAllProducts();
      totalPages.current = Math.ceil(response.length / 6);
    };
    fetchTotalProducts();
  }, []);

  const getCategoryName = (
    category: string | { _id: string; name: string }
  ): string => {
    if (typeof category === "string") return category;
    if (category && typeof category === "object" && "name" in category) {
      return category.name || "Unknown";
    }
    return "Unknown";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const nowTimeStamp = new Date().getTime();
      setLoading(true);
      try {
        if (selectedCategories.length > 0 || priceFilter) {
          const response = await getFilteredProducts(
            selectedCategories,
            priceFilter ? [0, parseInt(priceFilter)] : [0, 2e10]
          );

          const productsWithCategories = await Promise.all(
            response.map(async (product: ProductShopPage) => {
              try {
                const categoryData = await getProductCategory(
                  product.category.toString()
                );
                const categoryName = getCategoryName(categoryData);
                return {
                  ...product,
                  category: categoryName,
                };
              } catch (error) {
                console.error(
                  `Error fetching category for product ${product._id}:`,
                  error
                );

                return {
                  ...product,
                  category: getCategoryName(product.category),
                };
              }
            })
          );

          setProducts(productsWithCategories);
          setHasMore(false);
        } else {
          const response = await getProductsPagination(page, 6);

          const productsWithCategories = await Promise.all(
            response.products.map(async (product: ProductShopPage) => {
              try {
                const categoryData = await getProductCategory(
                  product.category.toString()
                );
                const categoryName = getCategoryName(categoryData);
                return {
                  ...product,
                  category: categoryName, 
                };
              } catch (error) {
                console.error(
                  `Error fetching category for product ${product._id}:`,
                  error
                );
                return {
                  ...product,
                  category: getCategoryName(product.category),
                };
              }
            })
          );

          setProducts(productsWithCategories);
          setHasMore(response.hasMore);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        const elapsed = new Date().getTime() - nowTimeStamp;
        setTimeout(() => {
          setLoading(false);
        }, Math.max(0, 300 - elapsed));
      }
    };
    fetchProducts();
  }, [page, selectedCategories, priceFilter]);

  if (loading) {
    return <Spinner />;
  }

  const handleCategoryChange = (id: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handlePriceChange = (value: string) => {
    setPriceFilter(value);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceFilter("");
  };

  return (
    <div className="flex bg-background-base-light justify-between font-yekan-bakh dark:bg-[var(--color-background-primary-dark)]">
      <Sidebar>
        <SidebarDropdown />
      </Sidebar>

      <div className="flex gap-16 py-8 font-YekanBakh text-black bg-background-base-light dark:bg-[var(--color-background-primary-dark)] dark:text-white min-h-screen h-full pr-56">
        <ShowPageAside
          categoriesFilter={selectedCategories}
          onCategoryChange={handleCategoryChange}
          priceFilter={priceFilter}
          onPriceChange={handlePriceChange}
          onClearFilters={clearFilters}
        />

        <ShopPageProducts
          products={products}
          page={page}
          totalPages={totalPages.current}
          hasMore={hasMore}
          selectedCategories={selectedCategories}
          priceFilter={priceFilter}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ShopPage;
