import { Box, Button, Container, TextField, Typography } from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../../validation/loginSchema";
import type { LoginRequest } from "../../types/auth.types";
import { loginApi } from "../../services/authService";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    const response = await loginApi(data);
    login(response.token, response.user);

    if (response.user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
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
        <Button fullWidth sx={{ mt: 2 }} onClick={() => navigate("/register")}>
          Don't have account ? Register
        </Button>
      </Box>
    </Container>
  );
}
