import axios from "axios";
const apiInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});
export default apiInstance;
