import React from 'react';
import { useStyles } from './styles';
import { Box, Button, Card, CardActions, CardContent, CircularProgress, SvgIcon, Typography } from '@mui/material';
import BalanceCard from './components/Card';
import { SaldoCarteira, SaldoDisponivel } from '../../resources/mocks/Home.Mock';

const Balances: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
        <BalanceCard label={SaldoDisponivel} />
        <BalanceCard label={SaldoCarteira} />
    </Box>
  );
};

export default Balances;
