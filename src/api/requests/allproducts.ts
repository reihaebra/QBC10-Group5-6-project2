import api from "../axios";

export interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl?: string;
  brand?: string;
  description?: string;
  rating?: number;
  stock?: number;
}

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get("/products/allproducts");
    return response.data;
  } catch (error) {
    console.error("خطا در دریافت محصولات:", error);
    return [];
  }
};
