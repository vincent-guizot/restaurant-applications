import axiosInstance from "./axios";

import {
   LoginPayload,
   RegisterPayload,
} from "@/types/auth.type";

export const login = async (
   payload: LoginPayload
) => {
   const response = await axiosInstance.post(
      "/api/auth/login",
      payload
   );

   return response.data;
};

export const register = async (
   payload: RegisterPayload
) => {
   const response = await axiosInstance.post(
      "/api/auth/register",
      payload
   );

   return response.data;
};