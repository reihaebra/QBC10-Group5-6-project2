import api from "../axios";

export const getAllProducts = async () => {
  const response = await api.get("/products/allproducts", { timeout: 5000 });
  return response.data;
};
