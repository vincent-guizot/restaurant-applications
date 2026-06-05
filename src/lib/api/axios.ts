import axios from "axios";
import { useAuthStore } from "@/store/auth.store";

const BASE_URL = "https://be-restaurant-production.up.railway.app"

const axiosInstance = axios.create({
   baseURL:
      BASE_URL,
});

axiosInstance.interceptors.request.use(
   (config) => {
      const token =
         useAuthStore.getState().token;

      if (token) {
         config.headers.Authorization =
            `Bearer ${token}`;
      }

      return config;
   },
   (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
   (response) => response,

   (error) => {
      if (error.response?.status === 401) {
         useAuthStore.getState().logout();
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;