export interface OrderItem {
  _id: string;
  name: string;
  image: string;
  qty: number;
  price: number;
  product: string;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface Order {
  _id: string;
  user: User;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  deliveredAt?: string;
  paidAt?: string;
  createdAt: string;
  updatedAt: string;
}
