import { Grid, Paper, Typography } from "@mui/material";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";

export default function AdminDashboard() {
  return (
    <>
      <DashboardLayout>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <StatCard title="Total Members" value="120" color="#42a5f5" />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StatCard title="Active Programs" value="5" color="#66bb6a" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StatCard title="Check-ins Today" value="37" color="#26a69a" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StatCard title="Referral Rewards" value="15" color="#ffa726" />
          </Grid>
        </Grid>

        {/* Latest Member Section */}
        <Paper sx={{ mt: 4, p: 3 }}>
          <Typography variant="h6">Latest Members</Typography>

          <Typography color="textSecondary">
            Chart and data will go here
          </Typography>
        </Paper>
        {/* Process Updates */}
        <Paper sx={{ mt: 4, p: 3 }}>
          <Typography variant="h6">Recent Process Updates</Typography>
          <Typography color="textSecondary">
            Process List will go here
          </Typography>
        </Paper>
      </DashboardLayout>
    </>
  );
}
