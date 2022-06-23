import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#61dafb",
    },
    secondary: {
      main: "#da61fb",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
