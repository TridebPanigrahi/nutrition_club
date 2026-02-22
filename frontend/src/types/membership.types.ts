export interface CreateMembershipDto {
  memberId: string;
  type: string;
  totalDays: number;
  startDate: Date;
  expiryDate: Date;
  amountPaid: number;
  status: string;
}
