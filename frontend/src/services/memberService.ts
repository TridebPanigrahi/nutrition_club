import type { User } from "../types/auth.types";
import type { MemberRequest, MemberResponse } from "../types/member.types";
import axiosInstance from "./axiosInstance";

export const createMember = async (data: MemberRequest) => {
  const response = await axiosInstance.post("/members", data);
  return response.data;
};

export const getMember = async (): Promise<MemberResponse[]> => {
  const response = await axiosInstance.get("/members");
  return response.data;
};

export const deleteMember = async (id: string) => {
  const response = await axiosInstance.delete(`/members/${id}`);
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get("/users");
  return response.data;
};
