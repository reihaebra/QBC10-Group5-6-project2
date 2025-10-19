import ProductCard from "./ui/ProductCard";
import allProducts from "../../constants/all-products-samples";
import { getAllProducts } from "../api/requests/products";
import { getProductCategory } from "../api/requests/productCategory";
import { useEffect, useState } from "react";

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
  category: productCategory[];
  createdAt: number | string;
  updatedAt: string | number;
  numReviews: string | number;
  __v: number;
}

const RelatedProducts = () => {
  const [related, setRelated] = useState<Product[]>([]);
  const [category, setCategory] = useState<productCategory[]>([]);
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await getAllProducts();
        const category = await getProductCategory("6862e094e700e7d8beb7b5f7");
        // if (response) {
        //   const data = await getProductCategory(response.category);
        //   setProductCategory(data);
        // }
        console.log(response);
        console.log(category);
        setRelated(response);
        setCategory(category);
      } catch (error) {
        console.error("Erorr:", error);
      }
    };
    fetchRelatedProducts();
  }, []);
  return (
    <div
      className="font-yekan-bakh w-full
                 bg-[color:var(--color-background-base-light)]
                 dark:bg-[color:var(--color-background-primary-dark)]
                 transition-colors duration-300"
    >
      <div className="flex flex-wrap gap-8">
        {related
          .filter((p) => {
            const categories = Array.isArray(p.category)
              ? p.category
              : [p.category];
            return categories.some((c) => c?.name === category[0]?.name);
          })

          .map((p) => (
            <ProductCard
              key={p._id}
              size="small"
              title={p.name}
              price={p.price}
              imageUrl={p.image}
            />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
