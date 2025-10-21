import api from "../axios";

export const getTotalSales = async () => {
  const response = await api.get("/orders/total-sales");
  return response.data;
};

export const getTotalCustomers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getTotalOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const getTotalSalesByDate = async () => {
  const response = await api.get("/orders/total-sales-by-date");
  return response.data;
};
