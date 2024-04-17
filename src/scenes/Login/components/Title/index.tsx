import React from 'react';
import { Box, TextField } from '@mui/material';
import { NOMEPROJETO, SUBTITULOPROJETO } from '../../../../utils/constants';
import { useStyles } from './style';

const Title = () => {
  const styles = useStyles();

  return (
    <>
        <Box className={styles.title}>
            <p>{NOMEPROJETO}</p>
        </Box>
        <Box className={styles.subTitle}>
            <p>{SUBTITULOPROJETO}</p>
        </Box>
    </>



  );
};

export default Title;
