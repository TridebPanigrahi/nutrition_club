import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ background: "#fff", color: "#000", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Nutrition Club
        </Typography>

        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">About</Button>

          <Button
            variant="contained"
            sx={{ ml: 2, background: "#2e7d32" }}
            onClick={() => navigate("/login")}
          >
            Member Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
