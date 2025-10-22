import api from "../axios";

export const getAllOrdersMine = async () => {
  const response = await api.get("/orders/mine", { timeout: 5000 });
  return response.data;
};
