import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box mt={10} textAlign="center">
        <Typography variant="h3" fontWeight="bold">
          Nutrition Club
        </Typography>

        <Typography mt={2}>
          Empowering You on the Journey to Wellness
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 4 }}
          onClick={() => navigate("/login")}
        >
          Member Login
        </Button>
      </Box>
    </Container>
  );
}
