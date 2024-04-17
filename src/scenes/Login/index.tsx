import React from 'react';
import UseLoginScreen from './hooks/useLoginScreen';
import { useStyles } from './styles';
import { Box, Button, TextField } from '@mui/material';
import { NOMEPROJETO } from '../../utils/constants';
import Title from '../../components/Title';

const LoginScreen = () => {
  const styles = useStyles();
  const {
    name
  } = UseLoginScreen();

  return (
    <Box className={styles.container}>
      <Title />
      <Button variant="outlined" size="large" color="warning">
        Continuar com Google
      </Button>
    </Box>
  );
};

export default LoginScreen;
