import axios from "axios";

const customAxiosInstance = axios.create({
  baseURL: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default customAxiosInstance;
