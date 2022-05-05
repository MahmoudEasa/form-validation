import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">React Steps</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Box>
        <App />
      </Box>
    </Container>
  </React.StrictMode>
);
