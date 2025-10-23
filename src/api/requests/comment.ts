import toast from "react-hot-toast";
import api from "../axios";

export const getCommentsApi = async (productId: string) =>{
    const respnse = await api.get(`/products/${productId}`);
    return respnse.data;
}

export const addCommentApi = async (productId: string, comment: { rating: number; comment: string }) =>{
    
     const response =await api.post(`/products/${productId}/reviews`, comment);
     return response.data;
}
 