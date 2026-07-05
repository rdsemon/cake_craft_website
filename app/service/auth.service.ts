import api from "./api";

import type { UserLogin, UserSignUp } from "./types/auth.types";

export const login = async (data: UserLogin) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const signUp = async (data: UserSignUp) => {
  const response = await api.post("/auth/signUp", data);
  return response.data;
};
