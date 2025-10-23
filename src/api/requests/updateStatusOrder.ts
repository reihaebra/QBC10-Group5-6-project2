import api from "../axios";
export const payOrderَAPI = async (orderId : string) => {
  const response = await api.put(`/orders/${orderId}/pay`);
  return response;
};
export const deliverOrderAPI = async (orderId:string) => {
  const response = await api.put(`/orders/${orderId}/deliver`);
  return response;
};