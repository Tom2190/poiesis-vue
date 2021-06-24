import axios from "axios";

const token = sessionStorage.setItem("userSession", testToken);

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json", "x-access-token": token },
});

const updatePassword = (user) => {
  return http.post("/update/password", user);
};

const updateUser = async (user) => {
    return await http.put("/user/profile", user)
}

const getUser = async () => {
    return await http.get("/user")
}

export default { updatePassword, updateUser, getUser }
