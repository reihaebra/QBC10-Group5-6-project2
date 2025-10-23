import { createContext } from "react";
import type { Product } from "./CartContextProvider";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string, title?: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);
