import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-com-server-4tui.onrender.com/api",
  // timeout: 1000,
});

export default instance