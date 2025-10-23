import api from "../axios";

export const getProductCategory = async (id: number | string) => {
  const response = await api.get(`/category/${id}`);
  return response.data;
};
