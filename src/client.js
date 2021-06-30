import axios from "axios";

// const token = sessionStorage.getItem("userSession");

// const http = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: { "Content-Type": "application/json", "x-access-token": token },
// });

const httpReq = async () => {
  const token = sessionStorage.getItem("userSession");
  return await axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type": "application/json", "x-access-token": token },
  });
};

const updatePassword = async (password) => {
  const http = await httpReq();
  return http.post("/users/password", password);
};

const updateUser = async (user) => {
  const http = await httpReq();
  return await http.put("/users/profile", { user });
};

const getUser = async () => {
  const http = await httpReq();
  return await http.get("/users");
};

const getAllUsers = async () => {
  const http = await httpReq();
  return await http.get("/users/all");
};
const getTextsByUser = async () => {
  const http = await httpReq();
  return await http.get("/texts/user");
};

export { updatePassword, updateUser, getUser, getAllUsers, getTextsByUser };
