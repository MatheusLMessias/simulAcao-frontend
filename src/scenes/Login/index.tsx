import React from 'react';
import UseLoginScreen from './hooks/useLoginScreen';
import { useStyles } from './styles';
import { Box } from '@mui/material';

const LoginScreen = () => {
  const styles = useStyles();
  const {
    name
  } = UseLoginScreen();


  return (

      <Box className={styles.container}>
        <p>
          {name}
        </p>
    </Box>


  );
};

export default LoginScreen;
