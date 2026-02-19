import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../validation/loginSchema";
import type { LoginRequest } from "../../types/auth.types";
import { loginApi } from "../../services/authService";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    const response = await loginApi(data);

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    if (response.user.role === "admin") {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/user/dashboard";
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" mb={3}>
          Nutrition Club Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}
