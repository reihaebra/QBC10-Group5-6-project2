import api from "../axios";

export interface OrderItem {
  _id: number;
  name: string;
  qty: number;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
}

export interface OrderData {
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
}

export const createOrder = async (orderData: OrderData) => {
  const response = await api.post("/orders", JSON.stringify(orderData), {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};
