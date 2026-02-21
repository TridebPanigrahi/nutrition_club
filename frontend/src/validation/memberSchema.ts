import * as yup from "yup";

export const memberSchema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(10, "Invalid phone number"),
  referredBy: yup.string().required("ReferredBy is required"),
  createdAt: yup.date().required("Date is required"),
});
