import api from "./api";
import toast, { Toaster } from "react-hot-toast";

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
