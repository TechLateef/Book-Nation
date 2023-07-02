import axios from "axios";

//create new connection with the api
const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//make use of token for request
client.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorizarion"] = `Bearer ${token}`;
    }
    return config;
  },
  function (ex) {
    return Promise.reject(ex);
  }
);

export default client;
