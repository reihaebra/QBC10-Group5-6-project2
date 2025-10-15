import api from "../axios"; 

export const getProductsPagination = async (page = 1, size = 10) => {
  const response = await api.get("/products", {
    params: { page, size },
  });
  return response.data;
};
