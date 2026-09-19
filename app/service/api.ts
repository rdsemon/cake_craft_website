import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://cake-craft-api.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
