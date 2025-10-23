import api from "../axios";

export interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export interface ChangeRolePayload {
  isAdmin: boolean;
}

export interface UpdateUserPayload {
  username?: string;
  email?: string;
}

export const getAllUsers = (): Promise<User[]> =>
  api.get("/users").then((res) => res.data);

export const updateUserInfo = (
  userId: string,
  payload: UpdateUserPayload
): Promise<User> => api.put(`/users/${userId}`, payload);

export const changeUserRole = (
  userId: string,
  payload: ChangeRolePayload
): Promise<User> => api.patch(`/users/role/${userId}`, payload);

export const deleteUser = (userId: string): Promise<void> =>
  api.delete(`/users/${userId}`);
