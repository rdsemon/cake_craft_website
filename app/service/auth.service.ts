import api from "./api";

import type { userLogin, userSignUp } from "./types/auth.types";

export const login = async (data: userLogin) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const signUp = async (data: userSignUp) => {
  const response = await api.post("/auth/signUp", data);
  return response.data;
};
