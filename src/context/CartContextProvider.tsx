import { useState, useEffect, type ReactNode } from "react";
import { CartContext } from "./cartContext";

export interface Product {
  id: string;
  title: string;
  price: number;
  brand:string
  imageUrl?: string;
  description?: string;
  quantity?: number;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    console.log(product.brand);
    
    setCart((prev) => {
      const exist = prev.find((item) => item.title === product.title);
      if (exist) {
        if ((product.quantity || 1) !== (exist.quantity || 1)) {
          return prev.map((item) =>
            item.title === product.title
              ? { ...item, quantity: product.quantity || 1 }
              : item
          );
        }

        return prev;
      }

      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  const removeFromCart = (id: string , title?:string) => {
    if (id != null || undefined) {
      setCart((prev) => prev.filter((item) => item.id != id));
    }
    else
    {
      setCart((prev) => prev.filter((item) => item.title !== title));
    }
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
