import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../validation/registerSchema";
import { registerApi } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };
    try {
      const response = await registerApi(payload);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/user/dashboard");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" mb={3}>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message as string}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message as string}
          />
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message as string}
          />
          <TextField
            fullWidth
            label="Conform Password"
            margin="normal"
            {...register("conformPassword")}
            error={!!errors.conformPassword}
            helperText={errors.conformPassword?.message as string}
          />
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
        <Button fullWidth sx={{ mt: 2 }} onClick={() => navigate("/login")}>
          Already have account? Login
        </Button>
      </Box>
    </Container>
  );
}
