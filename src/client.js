import axios from "axios";

const token = sessionStorage.setItem("userSession", testToken);

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json", "x-access-token": token },
});

// EXAMPLE
const signup = (user) => {
  return http.post("/signup", user);
};

// export default { signup };
export default { signup };
