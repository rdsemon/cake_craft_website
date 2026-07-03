import axios from "axios";
import api from "./api";

export const addToCart = async (cartData) => {
  try {
    const response = await api.post("/cart", cartData);
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    }
  }
};

export const getCartItems = async () => {
  const response = await api.get("/cart");
  console.log(response.data);
};

export const increaseItemQuantity = async (cakeId: string) => {
  try {
    const response = await api.patch("/cart/increase", { cakeId });
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "add to cart fail");
    }
  }
};
