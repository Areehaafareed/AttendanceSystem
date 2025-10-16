import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/biostar", 
});

export default api;
