import api from "../axios";

export const getAllOrders = async () => {
  const response = await api.get("/orders", { timeout: 5000 });
  return response.data;
};
