import axios from "axios";

const baseURL = import.meta.env.VITE_ORDERS_API || "http://localhost:4000";

export const ordersApi = axios.create({
  baseURL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
