import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box
      mt={8}
      p={5}
      bgcolor="#2e7d32"
      color="white"
      textAlign="center"
      borderRadius={2}
    >
      <Typography variant="h4">
        Empowering You on the Journey to Wellness
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3, background: "#fff", color: "#2e7d32" }}
        onClick={() => navigate("/register")}
      >
        Join Now
      </Button>
    </Box>
  );
}
