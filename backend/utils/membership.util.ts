export const calculateExpiryDate = (type: "10_DAYS" | "30_DAYS") => {
  const expiry = new Date();
  if (type === "10_DAYS") {
    expiry.setDate(expiry.getDate() + 30);
  }

  if (type === "30_DAYS") {
    expiry.setDate(expiry.getDate() + 60);
  }

  return expiry;
};
