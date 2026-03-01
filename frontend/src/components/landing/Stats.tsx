import { Grid, Paper, Typography } from "@mui/material";

export default function Stats() {
  const stats = [
    { label: "Success Rate", value: "90%" },
    { label: "Years Experience", value: "12+" },
    { label: "Members Joined", value: "1200+" },
    { label: "Programs", value: "200+" },
  ];

  return (
    <Grid container spacing={3} mt={5}>
      {stats.map((stat) => (
        <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
          <Paper sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h4">{stat.value}</Typography>

            <Typography>{stat.label}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
