import api from "../axios";

export const getFilteredProducts = async (
  categories: string[] = [],
  price: [number, number] = [0, 20000000000]
) => {
  const response = await api.post("/products/filtered", {
    categories,
    price,
  });
  return response.data;
};
