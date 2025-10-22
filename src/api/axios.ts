import axios, { AxiosError, type AxiosResponse } from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

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

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<any>) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message;

      switch (status) {
        case 401:
          toast.error("دسترسی غیرمجاز. لطفاً دوباره وارد شوید.");
          window.location.href = "/login";
          break;

        case 404:
          toast.error("موردی یافت نشد!");
          window.location.href = "/login";
          break;

        case 500:
          if (message === "Not authorized, no token.") {
            toast.error("لطفاً ابتدا وارد حساب کاربری شوید.");
            window.location.href = "/login";
          } else {
            toast.error("خطا در سرور!");
          }
          break;

        default:
          toast.error(message || "خطای ناشناخته!");
          break;
      }
    } else {
      toast.error("ارتباط با سرور برقرار نشد!");
    }

    return Promise.reject(error);
  }
);

export default api;
