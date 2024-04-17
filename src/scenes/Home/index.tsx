import React from 'react';
import { useStyles } from './styles';
import { Box, Button } from '@mui/material';
import Title from '../../components/Title';
import Header from '../../components/Header';

const HomeScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
        <Header/>
        <Box className={styles.container}>

        </Box>
    </>

  );
};

export default HomeScreen;
