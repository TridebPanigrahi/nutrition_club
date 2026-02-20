import { Avatar, Box, Typography } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";

export default function Topbar() {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        height: 70,
        background: "linear-gradient(to right, #2e7d32, #66bb6a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: 3,
        color: "white",
      }}
    >
      <Typography variant="h6">
        Welcome to Nutrition Club Dashboard, {user?.name}
      </Typography>

      <Avatar />
    </Box>
  );
}
