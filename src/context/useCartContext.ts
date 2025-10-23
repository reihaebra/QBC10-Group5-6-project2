import { useContext } from "react";
import { CartContext } from "./cartContext";
import type { Product } from "./CartContextProvider";
export const useCartContext = (): {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string, title?: string) => void;
  clearCart: () => void;
} | null => {
  return useContext(CartContext);
};
