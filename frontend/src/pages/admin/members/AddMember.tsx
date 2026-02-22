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
import { useEffect, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { memberSchema } from "../../../validation/memberSchema";
import type { MemberRequest } from "../../../types/member.types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import {
  createMember,
  getMember,
  getUsers,
} from "../../../services/memberService";

export const AddMember = () => {
  const [referrals, setReferrals] = useState<any[]>([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MemberRequest>({
    resolver: yupResolver(memberSchema),
    defaultValues: {
      referredBy: user?._id,
      createdAt: dayjs().toDate(),
    },
  });

  const fetchMembersData = async () => {
    try {
      const [userData, memberData] = await Promise.all([
        getUsers(),
        getMember(),
      ]);
      setReferrals([...userData, ...memberData]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMembersData();
  }, []);

  const onSubmit = async (data: MemberRequest) => {
    try {
      await createMember(data);
      navigate("/admin/members");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <DashboardLayout>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Add Member</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Phone"
                fullWidth
                margin="normal"
                {...register("phone")}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="referredBy"
                control={control}
                render={({ field }) => (
                  <Autocomplete
                    options={referrals}
                    getOptionLabel={(option) => option.name || ""}
                    value={
                      referrals.find((ref) => ref._id === field.value) || null
                    }
                    onChange={(_, newValue) => {
                      field.onChange(newValue?._id || "");
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Referred By"
                        margin="normal"
                        error={!!errors.referredBy}
                        helperText={errors.referredBy?.message}
                      />
                    )}
                  />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  control={control}
                  name="createdAt"
                  render={({ field }) => (
                    <DatePicker
                      label="Created At"
                      value={dayjs(field.value)}
                      onChange={field.onChange}
                      slotProps={{
                        textField: { fullWidth: true, margin: "normal" },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Box>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Create Member
              </Button>
              <Button
                variant="contained"
                sx={{ ml: 2 }}
                onClick={() => navigate("/admin/members")}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </form>
      </Paper>
    </DashboardLayout>
  );
};
