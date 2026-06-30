import axios from "axios";
import api from "./api";

export const addToCart = async (cartData) => {
  try {
    const response = await api.post("/cart", cartData);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "add to cart fail");
    }
  }
};
