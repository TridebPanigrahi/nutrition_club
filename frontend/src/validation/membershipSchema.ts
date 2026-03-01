import * as yup from "yup";
import { Dayjs } from "dayjs";
import type { MembershipFormData } from "../types/membership.types";

export const membershipSchema: yup.ObjectSchema<MembershipFormData> =
  yup.object({
    memberId: yup.string().required("Member is required"),

    type: yup.string().required("Type is required"),

    totalDays: yup.number().required(),

    usedDays: yup.number().required(),

    startDate: yup.mixed<Dayjs>().nullable().required("Start date required"),

    expiryDate: yup.mixed<Dayjs>().nullable().required("Expiry date required"),

    amountPaid: yup.number().required(),

    status: yup.string().required(),
  });
