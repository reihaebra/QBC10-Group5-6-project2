import React, { createContext, useContext, useMemo, useState } from "react";

// --- Types ---
type Currency = "USD" | "IRR";

export type LineItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  qty: number;
  currency: Currency;
};

export type Address = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  payment: string;
};

// --- Seed Data ---
export const itemsSeed: LineItem[] = [
  {
    id: "1",
    name: "Apple iPhone 14 Pro",
    image: "https://via.placeholder.com/80",
    price: 999,
    qty: 1,
    currency: "USD",
  },
  {
    id: "2",
    name: "Apple MacBook Air M2",
    image: "https://via.placeholder.com/80",
    price: 1299,
    qty: 1,
    currency: "USD",
  },
  {
    id: "3",
    name: "Apple iPad Pro 12.9-inch",
    image: "https://via.placeholder.com/80",
    price: 1099,
    qty: 1,
    currency: "USD",
  },
];

export const addressSeed: Address = {
  fullName: "علی موسوی",
  phone: "0933-xxx-xxxx",
  email: "Robert@gmail.com",
  address: "یزد، بلوار آزادی، کوچه نهم، پلاک ۱۹۳",
  payment: "درگاه پرداخت پاسارگاد",
};

// --- Context Types ---
type TestDataCtx = {
  items: LineItem[];
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  address: Address;
};

// --- Context ---
const TestDataContext = createContext<TestDataCtx | null>(null);

// --- Provider ---
export const TestDataProvider = ({
  seed,
  children,
  address,
}: {
  seed: LineItem[];
  children: React.ReactNode;
  address?: Address;
}) => {
  const [items, setItems] = useState<LineItem[]>(seed);

  const inc = (id: string) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it))
    );
  const dec = (id: string) =>
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it
      )
    );
  const remove = (id: string) =>
    setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );
  const tax = useMemo(() => +(subtotal * 0.09).toFixed(2), [subtotal]);
  const shipping = useMemo(() => (subtotal > 1500 ? 0 : 15), [subtotal]);
  const total = useMemo(
    () => +(subtotal + tax + shipping).toFixed(2),
    [subtotal, tax, shipping]
  );

  const value: TestDataCtx = {
    items,
    inc,
    dec,
    remove,
    subtotal,
    tax,
    shipping,
    total,
    address: address || addressSeed,
  };

  // ❌ JSX حذف شد و به React.createElement تغییر کرد
  return React.createElement(TestDataContext.Provider, { value }, children);
};

// --- Hook ---
export const useTestData = () => {
  const ctx = useContext(TestDataContext);
  if (!ctx) throw new Error("useTestData must be used within TestDataProvider");
  return ctx;
};
