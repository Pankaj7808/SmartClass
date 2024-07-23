import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function Login() {
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
            label="Email"
            fullWidth
            variant="outlined"
            required
            autoFocus
            // error={emailError}
            // helperText={emailError ? "Email is required" : ""}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            required
            // error={passwordError}
            // helperText={passwordError ? "Password is required" : ""}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" size="large">
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
