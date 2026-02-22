import { Box } from "@mui/material";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout({ children }: any) {
  return (
    <Box>
      <Topbar />
      <Box display="flex">
        <Sidebar />
        <Box p={3} width="100%">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
