import api from "../axios";
import type { Order } from "../../../constants/order";

export const getAllOrders = async () => {
  const response = await api.get("/orders", { timeout: 5000 });
  return response.data;
};
export const getOrderById = async (id: string) => {
  const response = await api.get(`/orders/${id}`, { timeout: 5000 });
  return response.data;
};
