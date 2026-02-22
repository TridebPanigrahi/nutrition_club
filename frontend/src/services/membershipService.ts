import axiosInstance from "./axiosInstance";

export const createMembership = async (data: any) => {
  const res = await axiosInstance.post("/memberships", data);
  return res.data;
};

export const getMembership = async () => {
  const res = await axiosInstance.get("/memberships");
  return res.data;
};

export const getMemberforMembership = async () => {
  const res = await axiosInstance.get("/members/memberships");
  return res.data;
};
