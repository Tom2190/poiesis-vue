import axios from "axios";

const token = sessionStorage.setItem("userSession", testToken);

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json", "x-access-token": token },
});

const updatePassword = (user) => {
  return http.post("/update/password", user);
};

export default { updatePassword };
