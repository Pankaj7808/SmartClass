import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

// Styled AppBar with custom height
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  height: "64px", // Adjust the height as needed
}));

// Styled main content with padding-top equal to AppBar height
const MainContent = styled("main")(({ theme }) => ({
  paddingTop: "64px", // Same as CustomAppBar height
  margin: 0, // Ensure no extra margin
  padding: 0, // Ensure no extra padding
  boxSizing: "border-box", // Make sure padding and borders are included in the element's total width and height
}));

function Layout({ children }) {
  return (
    <div>
      <CustomAppBar position="fixed" elevation={1}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SmartClass
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </CustomAppBar>
      <Toolbar style={{ minHeight: "64px" }} />{" "}
      {/* Ensure the Toolbar height matches CustomAppBar height */}
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default Layout;
