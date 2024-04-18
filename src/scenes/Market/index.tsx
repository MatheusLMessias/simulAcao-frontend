import React from "react";
import { useStyles } from "./styles";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import CheckboxList from "./components/List";
import { Lista } from "../../resources/mocks/Market.Mock";
import TitleList from "./components/TitleList";

const MarketScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Box className={styles.container}>
        <TitleList />
        {Lista.map((item: { id: any }) => (
          <CheckboxList key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
};

export default MarketScreen;
