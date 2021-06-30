import axios from "axios";

const token = sessionStorage.getItem("userSession");

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json", "x-access-token": token },
});

const updatePassword = (password) => {
  return http.post("/users/password", password);
};

const updateUser = async (user) => {
  return await http.put("/users/profile", { user });
};

const getUser = async () => {
  return await http.get("/users");
};

const getAllUsers = async () => {
  return await http.get("/users/all");
};
const getTextsByUser = async () => {
  return await http.get("/texts/user");
};

export { updatePassword, updateUser, getUser, getAllUsers, getTextsByUser };
