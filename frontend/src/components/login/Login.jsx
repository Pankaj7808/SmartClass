import {
  AppBar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

function Login() {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const LoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // JUST FOR NOW
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 88px)",
      }}
    >
      <Paper elevation={2} sx={{ padding: 4 }}>
        <Box minWidth="350px" display="flex" flexDirection="column" gap={3}>
          <Typography variant="h5" component="h1" color="primary">
            Login
          </Typography>
          <TextField
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            required
            autoFocus
            size="small"
            value={LoginForm.values.email}
            onChange={LoginForm.handleChange}
            onBlur={LoginForm.handleBlur}
            error={LoginForm.touched.email && Boolean(LoginForm.errors.email)}
            helperText={LoginForm.touched.email && LoginForm.errors.email}
          />
          <TextField
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            required
            size="small"
            value={LoginForm.values.password}
            onChange={LoginForm.handleChange}
            onBlur={LoginForm.handleBlur}
            error={
              LoginForm.touched.password && Boolean(LoginForm.errors.password)
            }
            helperText={LoginForm.touched.password && LoginForm.errors.password}
          />
          <Button variant="contained" onClick={LoginForm.handleSubmit}>
            Login
          </Button>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
              Don't have account?
            </Typography>
            <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
              Forget Password?
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
