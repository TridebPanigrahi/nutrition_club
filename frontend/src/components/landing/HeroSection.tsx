import {
  Box,
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: 'url("/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Floating Navbar */}

      <Container maxWidth="lg">
        <AppBar
          position="static"
          sx={{
            mt: 2,
            background: "#fff",
            color: "#000",
            borderRadius: "40px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            paddingX: 2,
          }}
        >
          <Toolbar>
            <Typography fontWeight="bold" flexGrow={1}>
              Nutrition Club
            </Typography>

            <Button color="inherit">Nutrition Plans</Button>

            <Button color="inherit">About Us</Button>

            <Button color="inherit">FAQs</Button>

            <Button
              variant="contained"
              sx={{
                ml: 2,
                borderRadius: "20px",
                background: "#2e7d32",
              }}
              onClick={() => navigate("/login")}
            >
              Member Login
            </Button>
          </Toolbar>
        </AppBar>
      </Container>

      {/* Hero Content */}

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "80vh",
          }}
        >
          {/* Left */}

          <Box flex={1}>
            <Typography variant="h3" fontWeight="bold" mb={2}>
              Having Balance Nutrition Important To Keep
            </Typography>

            <Typography mb={3}>
              We Make It Easy To Make Nutritional Choices
            </Typography>

            <Button
              variant="contained"
              sx={{
                mr: 2,
                borderRadius: "25px",
                background: "#2e7d32",
              }}
            >
              Explore Our Plans
            </Button>

            <Button variant="outlined" sx={{ borderRadius: "25px" }}>
              Learn More
            </Button>
          </Box>

          {/* Right Image */}

          <Box flex={1} textAlign="center">
            {/* <img
              src="/hero.png"
              alt="hero"
              style={{
                width: "80%",
              }}
            /> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
