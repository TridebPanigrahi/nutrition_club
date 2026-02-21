import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        background: "linear-gradient(to top, #66bb6a, #e8f5e9)",
        padding: 2,
      }}
    >
      <Typography variant="h6" mb={3}>
        Nutrition Club
      </Typography>
      <List>
        <ListItemButton onClick={() => navigate("/admin/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/admin/members")}>
          <ListItemText primary="Members" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Attendance" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Programs" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Progress Tracking" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
}
