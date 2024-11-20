import axios from "axios";
import { BASE_URL } from "../constant/baseURL";

// const username = USERNAME;
// const password = PASSWORD;
// const basicAuth = "Basic " + btoa(username + ":" + password);

// const bearerAuth = "Bearer " + TOKEN;

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Your API base URL
  headers: {
    // Authorization: bearerAuth,
    "Content-Type": "application/json", // You can include other headers here as needed
  },
});

export default axiosInstance;
