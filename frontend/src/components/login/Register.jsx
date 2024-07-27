import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

function Register({ showLogin, setShowLogin }) {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    username: yup
      .string("Enter Username")
      .min(2,"username should be of minimum 8 characters length")
      .required("Username is Required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirmPassword: yup
      .string("enter your Confirm Password")
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'), 
    
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
      <Paper elevation={2} sx={{ padding: 4 }}>
        <Box minWidth="350px" display="flex" flexDirection="column" gap={3}>
          <Typography variant="h5" component="h1" color="primary">
            Register
          </Typography>
          {/* You just have to do this */}
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
            helperText={RegisterForm.touched.email && RegisterForm.errors.email}

            // error={passwordError}
            // helperText={passwordError ? "Password is required" : ""}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Username"
            name="username"
            fullWidth
            variant="outlined"
            required
            size="small"
            value={RegisterForm.values.username}
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            error={
              RegisterForm.touched.username && Boolean(RegisterForm.errors.username)
            }
            helperText={RegisterForm.touched.username && RegisterForm.errors.username}

            // error={passwordError}
            // helperText={passwordError ? "Password is required" : ""}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Password"
            name="password"
            fullWidth
            variant="outlined"
            required
            size="small"
            value={RegisterForm.values.password}
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            error={
              RegisterForm.touched.password && Boolean(RegisterForm.errors.password)
            }
            helperText={RegisterForm.touched.password && RegisterForm.errors.password}

            // error={passwordError}
            // helperText={passwordError ? "Password is required" : ""}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            
            fullWidth
            variant="outlined"
            required
            size="small"
            value={RegisterForm.values.confirmPassword}
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            error={
              RegisterForm.touched.confirmPassword && Boolean(RegisterForm.errors.confirmPassword)
            }
            helperText={RegisterForm.touched.confirmPassword && RegisterForm.errors.confirmPassword}

            // error={passwordError}
            // helperText={passwordError ? "Password is required" : ""}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          {/* SIMILARLIY DO FOR PASSWOR AND CONFIRM PASWORD */}

          <Button variant="contained" size="small">
            Login
          </Button>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="subtitle2" sx={{ cursor: "pointer" }} onClick={() => setShowLogin(true)}>
              Already have an account?
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ cursor: "pointer" }}
            ></Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Register;
