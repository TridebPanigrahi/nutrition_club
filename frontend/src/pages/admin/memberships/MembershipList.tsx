import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMembership } from "../../../services/membershipService";

export const MembershipList = () => {
  const navigate = useNavigate();
  const [memberships, setMemberships] = useState<any[]>([]);
  const fetchMembership = async () => {
    const data = await getMembership();
    setMemberships(data);
  };
  useEffect(() => {
    fetchMembership();
  }, []);
  return (
    <DashboardLayout>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Membership</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/admin/membership/add")}
        >
          Add Membership
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>Expiry Date</TableCell>
              <TableCell>Total Days</TableCell>
              <TableCell>Used Days</TableCell>
              <TableCell>Referred By</TableCell>
              <TableCell>Amount Paid</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {memberships.map((membership) => (
              <TableRow key={membership._id}>
                <TableCell>{membership.memberId.name}</TableCell>
                <TableCell>{membership.type}</TableCell>
                <TableCell>
                  {new Date(membership.startDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(membership.expiryDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{membership.totalDays}</TableCell>
                <TableCell>{membership.usedDays}</TableCell>
                <TableCell>
                  {membership.memberId.referredBy?.name || "-"}
                </TableCell>
                <TableCell>{membership.amountPaid}</TableCell>
                <TableCell>{membership.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
};
