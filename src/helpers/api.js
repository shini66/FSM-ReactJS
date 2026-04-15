import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use(
  (config) => {
    console.log("API request:", config);
    return config;
  },
  (error) => {
    console.error("API request error:", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  },
);

export default api;
