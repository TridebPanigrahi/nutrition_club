import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 charecters"),
  conformPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must be match")
    .required("Conform password required"),
});
