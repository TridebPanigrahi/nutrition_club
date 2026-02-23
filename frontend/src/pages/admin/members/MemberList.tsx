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
import type { MemberResponse } from "../../../types/member.types";
import { deleteMember, getMember } from "../../../services/memberService";

export default function MemberList() {
  const navigate = useNavigate();
  const [members, setMembers] = useState<MemberResponse[]>([]);

  const fetchMembers = async () => {
    try {
      const data = await getMember();
      setMembers(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      if (!confirm("Delete this member ?")) return;
      await deleteMember(id);
      fetchMembers();
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <DashboardLayout>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5">Members</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/admin/members/add")}
        >
          Add Member
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member._id}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>
                  {new Date(member.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={() =>
                      navigate(`/admin/members/edit/${member._id}`)
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(member._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}
