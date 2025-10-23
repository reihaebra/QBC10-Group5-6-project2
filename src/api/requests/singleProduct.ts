import api from "../axios";

export const getSingleProducts = async (id: number | string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
