import { Dayjs } from "dayjs";

export interface MembershipFormData {
  memberId: string;
  type: string;
  totalDays: number;
  usedDays: number;
  startDate: Dayjs | null;
  expiryDate: Dayjs | null;
  amountPaid: number;
  status: string;
}
