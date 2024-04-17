import React from "react";
import { Outlet } from "react-router-dom";

import { Box, Container } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

import { useStyles } from "./styles";

const generateClassName = createGenerateClassName({
  seed: "apw-app-react-blank",
});

const Layout: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <StylesProvider generateClassName={generateClassName}>
        <Box className={classes.base}>
          <Container maxWidth="xl" className={classes.main} disableGutters>
              <Outlet />
          </Container>
        </Box>
    </StylesProvider>
  );
};

export default Layout;
