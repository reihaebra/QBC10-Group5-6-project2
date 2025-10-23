import ShopProductCard from "./ui/ShopProductCard";
import Pagination from "./Pagination";
import { useCartContext } from "../context/useCartContext";
import toast, { Toaster } from "react-hot-toast";

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
  products: ProductShopPage[];
  page: number;
  totalPages: number;
  hasMore: boolean;
  selectedCategories: string[];
  priceFilter: string;
  onPageChange: (page: number) => void;
}

const ShopPageProducts = ({
  products,
  page,
  totalPages,
  hasMore,
  selectedCategories,
  priceFilter,
  onPageChange,
}: ShopPageProductsProps) => {
  const { addToCart } = useCartContext()!;

  return (
    <>
      <Toaster position="top-right" />
      <main className="flex flex-col items-center">
        <section className="flex flex-row flex-wrap gap-6 max-w-[1200px]">
          {products.length > 0 ? (
            products.map((item) => (
              <ShopProductCard
                key={item._id}
                product={{
                  _id: item._id,
                  title: item.name,
                  brand: item.category.name,
                  price: item.price,
                  description: item.description,
                  imageUrl: item.image,
                }}
                onAddToCart={() => {
                  addToCart({
                    id: item._id,
                    title: item.name,
                    price: Number(item.price),
                    quantity: 1,
                    imageUrl: item.image,
                    description: item.description,
                  });
                  toast.success("محصول با موفقیت به سبد خرید اضافه شد.");
                }}
              />
            ))
          ) : (
            <p className="text-primary-text-light dark:text-white font-yekan-bakh font-semibold">
              محصولی یافت نشد.
            </p>
          )}
        </section>

        {selectedCategories.length === 0 && !priceFilter && hasMore && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </main>
    </>
  );
};

export default ShopPageProducts;
