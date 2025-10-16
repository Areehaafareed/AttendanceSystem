import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5204/biostar", 
});

export default api;
