import { Box, Paper, TextField, Typography } from "@mui/material";
import "./App.css";
import Layout from "./pages/login/Layout";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <LoginPage/>
      </Layout>
    </div>
  );
}

export default App;
