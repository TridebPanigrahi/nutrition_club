import axiosInstance from "./axiosInstance";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};
