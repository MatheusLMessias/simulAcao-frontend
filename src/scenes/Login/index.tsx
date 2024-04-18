import React from "react";
import { useStyles } from "./styles";
import { Box, Button } from "@mui/material";
import Title from "./components/Title";

const LoginScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Title />
      <Button href="/Home" variant="outlined" size="large" sx={{color:"white", borderColor: "white"}}>
        Continuar com Google
      </Button>
    </Box>
  );
};

export default LoginScreen;
