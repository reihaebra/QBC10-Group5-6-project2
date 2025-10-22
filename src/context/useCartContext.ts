import { useContext } from "react";
import { CartContext } from "./cartContext";
export interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
  description?: string;
  quantity?: number;
}
export const useCartContext = (): {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string, title?: string) => void;
  clearCart: () => void;
} | null => {
  return useContext(CartContext);
};
