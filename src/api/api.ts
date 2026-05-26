// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // or process.env.REACT_APP_API_URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
