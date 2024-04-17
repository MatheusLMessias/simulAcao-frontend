import React from 'react';
import { useStyles } from './styles';
import { Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ScenesHeader from './components/ScenesHeader';

const Header: React.FC = () => {
  const styles = useStyles();

  return (
        <Box className={styles.container}>
            <Box className={styles.home}>
                <IconButton sx={{color: "white"}} href="/Home" aria-label="add to shopping cart" size="large">
                    <HomeIcon fontSize="inherit"/>
                </IconButton>
            </Box>
            <ScenesHeader />
            <Box className={styles.user}>
                <IconButton sx={{color: "white"}} href="/User" color="primary" aria-label="add to shopping cart" size="large">
                    <AccountCircleIcon fontSize="inherit"/>
                </IconButton>
            </Box>
        </Box>
  );
};

export default Header;
