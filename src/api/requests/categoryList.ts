import api from "../axios";
export const getCategoryList = async () => {
  const response = await api.get("/category/categories");
  return response.data;
};
