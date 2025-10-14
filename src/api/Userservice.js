import api from "./api";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const addUser = async (user) => {
  const response = await api.post("/users", user);
  return response.data;
};
