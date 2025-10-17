import api from "../axios";

export const getUserProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};

export const updateUserProfile = async (profileData: {
  username?: string;
  email?: string;
  password?: string;
}) => {
  const response = await api.put("/users/profile", profileData);
  return response.data;
};
