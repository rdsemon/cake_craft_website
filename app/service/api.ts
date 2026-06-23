import axios from "axios";

const api = axios.create({
  baseURL: "https://cake-craft-api.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
