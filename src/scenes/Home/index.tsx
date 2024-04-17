import React from 'react';
import { useStyles } from './styles';
import { Box, Button } from '@mui/material';
import Title from '../Login/components/Title';
import Header from '../../components/Header';
import Balances from '../../components/Balances';

const HomeScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
        <Header/>
        <Box className={styles.container}>
            <Balances />
        </Box>
    </>

  );
};

export default HomeScreen;
