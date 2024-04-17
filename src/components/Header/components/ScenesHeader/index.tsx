import React from "react";
import { useStyles } from "./styles";
import { Box, Button } from "@mui/material";

const ScenesHeader: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Button sx={{ color: "white" }} href="/Home" size="large" color="primary">
        Home
      </Button>
      <Button
        sx={{ color: "white" }}
        href="/Carteira"
        size="large"
        color="primary"
      >
        Carteira
      </Button>
      <Button
        sx={{ color: "white" }}
        href="/Mercado"
        size="large"
        color="primary"
      >
        Mercado
      </Button>
    </Box>
  );
};

export default ScenesHeader;
