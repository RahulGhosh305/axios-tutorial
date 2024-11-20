import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://www.course-api.com",
});

axiosInstance.interceptors.request.use(
  (request) => {
    // business login will be there
    // Ensure the headers object exists
    if (!request.headers) {
      request.headers = {};
    }

    // Set the Accept header
    request.headers["Accept"] = "application/json";
    console.log("Check interceptors request sent...");
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    // business login will be there
    console.log("Check interceptors got response...");
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      // do something
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);
