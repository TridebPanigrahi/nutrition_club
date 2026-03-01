import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import DashboardLayout from "../../../layouts/DashboardLayout";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { membershipSchema } from "../../../validation/memberShipSchema";
import { useEffect, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  createMembership,
  getMemberforMembership,
} from "../../../services/membershipService";
import type { MembershipFormData } from "../../../types/membership.types";
import { useNavigate } from "react-router-dom";

export default function AddMembership() {
  const [members, setMembers] = useState<any[]>([]);
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<MembershipFormData>({
    resolver: yupResolver(membershipSchema),
    defaultValues: {
      usedDays: 0,
      startDate: dayjs(),
      expiryDate: dayjs(),
      status: "ACTIVE",
    },
  });

  console.log("GetVal", getValues());

  const totalDays = watch("totalDays");

  const startDate = watch("startDate");

  const fetchMembers = async () => {
    const data = await getMemberforMembership();
    setMembers(data);
  };
  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    if (startDate && totalDays) {
      const expiry = dayjs(startDate).add(totalDays, "day");
      setValue("expiryDate", expiry);
    }
  }, [startDate, totalDays]);
  const onSubmit = async (data: MembershipFormData) => {
    const payload = {
      ...data,
      startDate: data.startDate?.toISOString(),
      expiryDate: data.expiryDate?.toISOString(),
    };

    await createMembership(payload);
    navigate("/admin/membership");
  };
  return (
    <DashboardLayout>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5">Add Membership</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="memberId"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={members}
                    getOptionLabel={(option) => option.name}
                    value={members.find((m) => m._id === field.value) || null}
                    onChange={(event, value) => {
                      field.onChange(value?._id || "");
                    }}
                    renderInput={(param) => (
                      <TextField
                        {...param}
                        label="Member"
                        margin="normal"
                        error={!!errors.memberId}
                        helperText={errors.memberId?.message}
                      />
                    )}
                  />
                )}
              />

              <TextField
                label="Total Days"
                type="number"
                fullWidth
                margin="normal"
                {...register("totalDays")}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                select
                label="Type"
                fullWidth
                margin="normal"
                {...register("type")}
              >
                <MenuItem value="10_DAYS">10 Days</MenuItem>
                <MenuItem value="30_DAYS">30 Days</MenuItem>
              </TextField>
              <TextField
                label="Used Days"
                fullWidth
                type="number"
                margin="normal"
                // {...register("usedDays")}
                disabled
                defaultValue={0}
                error={!!errors.usedDays}
                helperText={errors.usedDays?.message}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  control={control}
                  name="startDate"
                  render={({ field }) => (
                    <DatePicker
                      label="Start Date"
                      value={dayjs(field.value)}
                      onChange={field.onChange}
                      slotProps={{
                        textField: { fullWidth: true, margin: "normal" },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
              <TextField
                label="Pay Amount"
                fullWidth
                margin="normal"
                {...register("amountPaid")}
                type="number"
                error={!!errors.amountPaid}
                helperText={errors.amountPaid?.message}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="expiryDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      label="Expiry Date"
                      value={dayjs(field.value)}
                      slotProps={{
                        textField: { fullWidth: true, margin: "normal" },
                      }}
                      readOnly
                    />
                  )}
                />
              </LocalizationProvider>
              <TextField
                select
                name="status"
                label="Status"
                fullWidth
                margin="normal"
              >
                <MenuItem value={"ACTIVE"}>Active</MenuItem>
                <MenuItem value={"COMPLETED"}>Completed</MenuItem>
                <MenuItem value={"EXPIRED"}>Expired</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button type="submit" variant="contained">
              Create Membership
            </Button>
          </Box>
        </form>
      </Paper>
    </DashboardLayout>
  );
}
