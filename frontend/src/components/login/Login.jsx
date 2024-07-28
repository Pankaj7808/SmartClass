import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Slide,
  InputAdornment,
  IconButton,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login({ showLogin, setShowLogin }) {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 88px)",
      }}
    >
      <Slide direction="left" in={showLogin} mountOnEnter unmountOnExit>
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
              type={showPassword ? "text" : "password"}
              error={
                LoginForm.touched.password && Boolean(LoginForm.errors.password)
              }
              helperText={
                LoginForm.touched.password && LoginForm.errors.password
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={LoginForm.handleSubmit}>
              Login
            </Button>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle2"
                sx={{ cursor: "pointer" }}
                onClick={() => setShowLogin(false)}
              >
                Don't have an account?
              </Typography>
              <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
                Forgot Password?
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
}

export default Login;
