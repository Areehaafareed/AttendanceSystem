import axios from "axios";

// Change baseURL to your backend API
const api = axios.create({
  baseURL: "https://localhost:5001/api",
});

export default api;
