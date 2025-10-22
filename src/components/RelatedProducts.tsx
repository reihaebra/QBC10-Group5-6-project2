import ProductCard from "./ui/ProductCard";
import allProducts from "../../constants/all-products-samples";
import { getAllProducts } from "../api/requests/products";
import { getProductCategory } from "../api/requests/productCategory";
import { useEffect, useState } from "react";
import { getSingleProducts } from "../api/requests/singleProduct";

interface productCategory {
  _id: string | number;
  name: string;
  __v: string;
}

interface Reviews {
  name: string;
  rating: number | string;
  comment: string;
  user: number | string;
  _id: number | string;
  createdAt: number | string;
  updatedAt: string | number;
}

export interface Product {
  _id: number | string;
  name: string;
  image: string;
  quantity: number | string;
  description: string;
  rating: number | string;
  price: string;
  countInStock: number | string;
  reviews: Reviews[];
  category: productCategory;
  createdAt: number | string;
  updatedAt: string | number;
  numReviews: string | number;
  __v: number;
}
interface RelatedProductsProps {
  productID: string;
}
const RelatedProducts = ({ productID }: RelatedProductsProps) => {
  const [related, setRelated] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>();
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        console.log(productID);

        const response = await getAllProducts();
        const categoryRes = await getSingleProducts(productID);
        setRelated(response);
        setCategory(categoryRes.category);
      } catch (error) {
        console.error("Erorr: ", error);
      }
    };
    fetchRelatedProducts();
  }, []);

  return (
    <div
      className="font-yekan-bakh w-full
                 bg-background-base-light
                 dark:bg-[var(--color-background-primary-dark)]
                 transition-colors duration-300"
    >
      <div className="flex flex-wrap gap-8">
        {related.filter(
          (p) => p.category?._id === category && p._id !== productID
        ).length > 0 ? (
          related
            .filter((p) => p.category?._id === category && p._id !== productID)
            .map((p) => (
              <ProductCard
                key={p._id}
                size="small"
                product={{
                  ...p,
                  _id: String(p._id),
                  rating:
                    typeof p.rating === "string" ? Number(p.rating) : p.rating,
                  numReviews:
                    typeof p.numReviews === "string"
                      ? Number(p.numReviews)
                      : p.numReviews,
                  countInStock:
                    typeof p.countInStock === "string"
                      ? Number(p.countInStock)
                      : p.countInStock,
                  price:
                    typeof p.price === "string" ? Number(p.price) : p.price,
                  updatedAt: String(p.updatedAt),
                }}
              />
            ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            محصول مرتبطی وجود ندارد.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
