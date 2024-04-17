import React from 'react';
import UseLoginScreen from './hooks/useLoginScreen';
import { useStyles } from './styles';
import { Box, Button } from '@mui/material';
import Title from '../../components/Title';

const LoginScreen: React.FC = () => {
  const styles = useStyles();
  const {
    name
  } = UseLoginScreen();

  return (
    <Box className={styles.container}>
      <Title />
      <Button href="/Home" variant="outlined" size="large" color="warning">
        Continuar com Google
      </Button>
    </Box>
  );
};

export default LoginScreen;
