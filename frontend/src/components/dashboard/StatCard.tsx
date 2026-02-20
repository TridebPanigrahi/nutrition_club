import { Paper, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string | number;
  color: string;
}

export default function StatCard({ title, value, color }: Props) {
  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: color,
        color: "white",
        borderRadius: 3,
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
}
