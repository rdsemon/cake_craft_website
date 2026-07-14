import axios from "axios";
import api from "./api";
import type { CakesResponse, Cake } from "../types/cake.types";

export const getAllCakes = async (): Promise<CakesResponse> => {
  const response = await api.get<CakesResponse>("/cakes");
  return response.data;
};

export const getOneCake = async (id: string): Promise<Cake> => {
  try {
    const response = await api.get<Cake>(`/cakes/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch cake");
    }
    throw new Error("Unexpected error");
  }
};

export const createCake = async (cakeData: Cake) => {
  try {
    const response = await api.post("/cakes", cakeData);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "cake not found");
    }
  }
};

export const deleteCake = async (id: string) => {
  try {
    const response = await api.delete(`/cakes/${id}`);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Delete fail");
    }
  }
};
