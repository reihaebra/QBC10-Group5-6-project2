import { useState, useEffect, type ReactNode } from "react";
import { CartContext } from "./cartContext";

export interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl?: string;
  description?: string;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  useEffect(() => {
    localStorage.setItem("cartContext", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const saved = localStorage.getItem("cartContext");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
