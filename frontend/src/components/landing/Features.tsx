import { Grid, Typography, Paper } from "@mui/material";

export default function Features() {
  const features = [
    "Balanced Diet Plans",
    "Weight Loss Programs",
    "Personal Coaching",
  ];

  return (
    <Grid container spacing={3} mt={5}>
      {features.map((feature) => (
        <Grid size={{ xs: 12, md: 4 }} key={feature}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">{feature}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
