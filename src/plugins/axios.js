import axios from "axios";

const instance = axios.create({
  baseURL: "your-api-url",
  timeout: 5000,
});

export default instance;
