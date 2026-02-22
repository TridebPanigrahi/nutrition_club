import * as yup from "yup";

export const membershipSchema = yup.object({
  memberId: yup.string().required("Member required"),
  type: yup.string().required(),
  totalDays: yup.number().required().min(1),
  usedDays: yup.number(),
  startDate: yup.date().required(),
  expiryDate: yup.date(),
  amountPaid: yup.number().required(),
  status: yup.string().required(),
});
