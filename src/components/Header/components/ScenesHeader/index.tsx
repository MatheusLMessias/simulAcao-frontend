import React from 'react';
import { useStyles } from './styles';
import { Box, Button, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ScenesHeader: React.FC = () => {
  const styles = useStyles();

  return (
        <Box className={styles.container}>
          <Button href="/Home" size="large" color="primary">Home</Button>
          <Button href="/Carteira" size="large" color="primary">Carteira</Button>
          <Button href="/Mercado" size="large" color="primary">Mercado</Button>
        </Box>
  );
};

export default ScenesHeader;
