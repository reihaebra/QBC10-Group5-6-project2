import { useContext } from "react";
import { CartContext } from "./cartContext";
export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  description?: string;
  quantity?: number;
}
export const useCartContext = (): {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
} | null => {
  return useContext(CartContext);
};
