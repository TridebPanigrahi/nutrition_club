import axiosInstance from "./axiosInstance";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const registerApi = async (data: any) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};
