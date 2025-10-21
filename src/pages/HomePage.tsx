import { useEffect, useState } from "react";
import { getAllProducts } from "../api/requests/products";
import HeroSection from "../components/HeroSection";
import SpecialProducts from "../components/SpecialProducts";
import Sidebar from "../components/ui/Sidebar";
import UserDropdown from "../components/ui/UserDropdown";


export interface Product {
  id: number;
  name: string;
  category?: string;
  price: string;
  description?: string;
  imageUrl: string;
  rating?: number;
  reviews?: number;
  stock?: number;
  updatedAt?: string;
}


const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;

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
