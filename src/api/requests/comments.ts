import api from "../axios";

export const getComments = (productId: string) =>
  api.get(`/products/${productId}/reviews`);

export const addComment = (productId: string, comment: { rating: number; comment: string }) =>
  api.post(`/products/${productId}/reviews`, comment);
