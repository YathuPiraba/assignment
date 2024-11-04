import axios from "axios";

const baseURL = import.meta.env.BASE_URL;

// JSON API client
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// FormData API client
const authApiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

// Interceptors for adding the token dynamically
const attachTokenInterceptor = (client) => {
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });
};

// Attach interceptors to both clients
attachTokenInterceptor(apiClient);
attachTokenInterceptor(authApiClient);

export { apiClient, authApiClient };
