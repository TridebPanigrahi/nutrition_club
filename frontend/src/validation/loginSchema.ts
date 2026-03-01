import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Email required").email("Invalid Email"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "Minimum 6 character"),
});
