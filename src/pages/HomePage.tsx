import { useEffect, useState } from "react";
import { getAllProducts } from "../api/requests/products";
import HeroSection from "../components/HeroSection";
import SpecialProducts from "../components/SpecialProducts";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

interface Product {
  _id: string;
  name: string;
  category: { name: string };
  price: number | string;
  description: string;
  image: string;
  rating?: number;
  numReviews?: number;
  countInStock?: number;
  updatedAt: string;
}

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const nowTimeStamp = new Date().getTime();
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
        toast.error("خطا در دریافت محصولات. لطفاً دوباره تلاش کنید.");
      } finally {
        const elapsed = new Date().getTime() - nowTimeStamp;
        setTimeout(() => {
          setLoading(false);
        }, Math.max(0, 500 - elapsed));
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  const heroProducts = products.slice(0, 2);
  const sideProducts = products.slice(2, 6);
  console.log(sideProducts);

  const specialProducts = products.slice(6, 12);

  return (
    <main className="bg-background-base-light dark:bg-[var(--color-background-primary-dark)] pr-36 py-8 pl-14">
      <Sidebar>
        <UserDropdown />
      </Sidebar>
      <div>
        <HeroSection heroProducts={heroProducts} sideProducts={sideProducts} />
        <SpecialProducts specialProducts={specialProducts} />
      </div>
    </main>
  );
};

export default HomePage;
