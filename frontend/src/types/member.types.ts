export interface MemberResponse {
  _id: string;
  name: string;
  phone: string;
  referredBy: string;
  createdAt: string;
}

export interface MemberRequest {
  name: string;
  phone: string;
  referredBy: string;
  createdAt: Date;
}
