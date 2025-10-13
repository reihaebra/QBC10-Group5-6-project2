import api from "../axios";

export const getAllProducts = async () => {
  const response = await api.get("/products/allproducts");
  return response.data;
};