import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "https://cuteweb.in/sandbox/budget/admin/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;