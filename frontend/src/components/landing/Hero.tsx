import { Grid, Typography, Button, Box } from "@mui/material";

export default function Hero() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h3" fontWeight="bold">
          Having Balance Nutrition Important To Keep
        </Typography>

        <Typography mt={2} color="text.secondary">
          We Provide Best Nutrition Plans and Personal Guidance
        </Typography>

        <Box mt={3}>
          <Button variant="contained" sx={{ background: "#2e7d32", mr: 2 }}>
            Get Started
          </Button>

          <Button variant="outlined">Learn More</Button>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/hero.png"
          alt="nutrition"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </Grid>
    </Grid>
  );
}
