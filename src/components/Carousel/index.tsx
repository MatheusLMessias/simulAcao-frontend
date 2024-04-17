import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Cards from './components/Cards';
import { AcoesEmAlta } from '../../resources/mocks/Home.Mock';
import { Box } from '@mui/material';
import { useStyles } from './styles';
import { TITULOACOES } from '../../utils/constants';

const CarouselComponent: React.FC = () => {
    const styles = useStyles();
    return (
        <Box className={styles.container}>
            <Box className={styles.title}>
                <p>{TITULOACOES}</p>
            </Box>
            <Carousel className={styles.carousel}>
                {
                    AcoesEmAlta.map( item => <Cards key={item.id} item={item} /> )
                }
            </Carousel>

        </Box>

    )
}

export default CarouselComponent;