import React from "react";
import { useStyles } from "./styles";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Balances from "../../components/Balances";
import CarouselComponent from "../../components/Carousel";
import { TITULOACOES, TITULONOTICIAS } from "../../utils/constants";
import { AcoesEmAlta, Noticias } from "../../resources/mocks/Home.Mock";

const HomeScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Box className={styles.container}>
        <Balances />
        <Box className={styles.containerCarousel}>
          <CarouselComponent title={TITULOACOES} cardContent={AcoesEmAlta} />
          <CarouselComponent title={TITULONOTICIAS} cardContent={Noticias} />
        </Box>
      </Box>
    </>
  );
};

export default HomeScreen;
