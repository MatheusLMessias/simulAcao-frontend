import React from "react";
import Carousel from "react-material-ui-carousel";
import Cards from "./components/Cards";
import { Box } from "@mui/material";
import { useStyles } from "./styles";

type CarouselComponent = {
  title: String;
  cardContent: any;
};

const CarouselComponent: React.FC<CarouselComponent> = ({
  title,
  cardContent,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Box className={styles.title}>
        <p>{title}</p>
      </Box>
      <Carousel className={styles.carousel}>
        {cardContent.map((item: { id: any }) => (
          <Cards key={item.id} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;
