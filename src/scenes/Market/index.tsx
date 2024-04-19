import React from "react";
import { useStyles } from "./styles";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import ListMarket from "./components/ListMarket";
import { Lista } from "../../resources/mocks/Market.Mock";
import TitleList from "./components/TitleList";
import Balances from "../../components/Balances";

const MarketScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Box className={styles.container}>
        <Balances />
        <Box className={styles.title}>
          <p>Mercado - B3</p>
        </Box>
        <TitleList />
        {Lista.map((item: { id: any }) => (
          <ListMarket key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
};

export default MarketScreen;
