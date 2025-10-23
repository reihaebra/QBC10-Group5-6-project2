import api from "../axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export const loginUser = (data: LoginData) => api.post("/users/auth", data);

export const registerUser = (data: RegisterData) => api.post("/users", data);
