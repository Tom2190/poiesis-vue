import axios from "axios";

const token = sessionStorage.getItem("userSession");

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json", "x-access-token": token },
});

const updatePassword = (user) => {
  return http.post("/update/password", user);
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

export { updatePassword, updateUser, getUser, getAllUsers };
