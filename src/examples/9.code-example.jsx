import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../constant/baseURL";

// Create an Axios instance with default configuration
const jwtAxiosInstance = axios.create({
  baseURL: BASE_URL, // Your API base URL
  headers: {
    "Content-Type": "application/json", // You can include other headers here as needed
  },
});

const LOCAL_STORAGE_DATA = localStorage.getItem("isAuth");

const IS_LOGIN: any = LOCAL_STORAGE_DATA
  ? JSON.parse(LOCAL_STORAGE_DATA)
  : null;

jwtAxiosInstance.interceptors.request.use(
  (config) => {
    if (IS_LOGIN?.accessToken) {
      config.headers.Authorization = `Bearer ${IS_LOGIN?.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
jwtAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      toast.error("User not authorized, initiating logout process.");
      localStorage.clear();
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

export default jwtAxiosInstance;
