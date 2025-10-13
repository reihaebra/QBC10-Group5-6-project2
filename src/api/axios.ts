import axios, { AxiosError, type AxiosResponse } from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//  Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//  Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<any>) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        toast.error("دسترسی غیرمجاز. لطفاً دوباره وارد شوید.");
      } else if (status === 404) {
        toast.error("موردی یافت نشد!");
      } else if (status >= 500) {
        toast.error("خطا در سرور!");
      } else {
        toast.error(error.response.data.message || "خطای ناشناخته!");
      }
    } else {
      toast.error("ارتباط با سرور برقرار نشد!");
    }

    return Promise.reject(error);
  }
);
export default api;
