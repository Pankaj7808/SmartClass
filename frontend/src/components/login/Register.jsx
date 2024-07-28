import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
function Register({ showLogin, setShowLogin }) {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    username: yup
      .string("Enter Username")
      .min(2, "username should be of minimum 8 characters length")
      .required("Username is Required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("Enter your confirm password")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const RegisterForm = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
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
      <Slide direction="right" in={!showLogin} mountOnEnter unmountOnExit>
        <Paper elevation={2} sx={{ padding: 4 }}>
          <Box minWidth="350px" display="flex" flexDirection="column" gap={3}>
            <Typography variant="h5" component="h1" color="primary">
              Register
            </Typography>
            <TextField
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              required
              size="small"
              value={RegisterForm.values.email}
              onChange={RegisterForm.handleChange}
              onBlur={RegisterForm.handleBlur}
              error={
                RegisterForm.touched.email && Boolean(RegisterForm.errors.email)
              }
              helperText={
                RegisterForm.touched.email && RegisterForm.errors.email
              }
            />
            <TextField
              name="username"
              label="Username"
              fullWidth
              variant="outlined"
              required
              size="small"
              value={RegisterForm.values.username}
              onChange={RegisterForm.handleChange}
              onBlur={RegisterForm.handleBlur}
              error={
                RegisterForm.touched.username &&
                Boolean(RegisterForm.errors.username)
              }
              helperText={
                RegisterForm.touched.username && RegisterForm.errors.username
              }
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              required
              size="small"
              value={RegisterForm.values.password}
              onChange={RegisterForm.handleChange}
              onBlur={RegisterForm.handleBlur}
              error={
                RegisterForm.touched.password &&
                Boolean(RegisterForm.errors.password)
              }
              helperText={
                RegisterForm.touched.password && RegisterForm.errors.password
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <VisibilityOff />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="confirmPassword"
              type="Password"
              label="Confirm Password"
              fullWidth
              variant="outlined"
              required
              size="small"
              value={RegisterForm.values.confirmPassword}
              onChange={RegisterForm.handleChange}
              onBlur={RegisterForm.handleBlur}
              error={
                RegisterForm.touched.confirmPassword &&
                Boolean(RegisterForm.errors.confirmPassword)
              }
              helperText={
                RegisterForm.touched.confirmPassword &&
                RegisterForm.errors.confirmPassword
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={RegisterForm.handleSubmit}>
              Register
            </Button>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography
                variant="subtitle2"
                sx={{ cursor: "pointer" }}
                onClick={() => setShowLogin(true)}
              >
                Already have an account?
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ cursor: "pointer" }}
              ></Typography>
            </Box>
          </Box>
        </Paper>
      </Slide>
    </Box>
  );
}

export default Register;
