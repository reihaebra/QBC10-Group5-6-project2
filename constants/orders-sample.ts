type PaymentStatus = "paid" | "unpaid";
type TransitionStatus = "sent" | "pending" | "unsent";

interface OrderRowProps {
  id: number;
  imageUrl: string;
  name: string;
  price: string;
  user: string;
  date: string;
  paymentStatus: PaymentStatus;
  transitionStatus: TransitionStatus;
}

const data: OrderRowProps[] = [
  {
    id: 1,
    imageUrl: "./src/assets/images/iphone-14-full-order.png",
    name: "Apple iPhone 14 Pro",
    price: "۱۰,۰۰۰ ",
    user: "کاربر",
    date: "۱۴-۱/۰۴/۳۱",
    paymentStatus: "paid",
    transitionStatus: "pending",
  },
  {
    id: 2,
    imageUrl: "./src/assets/images/mac-midnight.png",
    name: "Apple MacBook Air M2",
    price: "۱۰,۰۰۰ ",
    user: "کاربر",
    date: "۱۴-۱/۰۴/۳۱",
    paymentStatus: "unpaid",
    transitionStatus: "unsent",
  },
  {
    id: 3,
    imageUrl: "./src/assets/images/ipad-pro.png",
    name: "Apple iPad Pro 12.9-inch",
    price: "۱۰,۰۰۰ ",
    user: "کاربر",
    date: "۱۴-۱/۰۴/۳۱",
    paymentStatus: "paid",
    transitionStatus: "sent",
  },
];

export default data;
