import React from "react";
import { useStyles } from "./styles";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import Balances from "../../components/Balances";
import TitleList from "./components/TitleList";
import { ListaWallet } from "../../resources/mocks/Wallet.Mock";
import ListWallet from "./components/ListWallet";

const WalletScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Box className={styles.container}>
        <Balances />
        <Box className={styles.title}>
          <p>Minha carteira</p>
        </Box>
        <TitleList />
        {ListaWallet.map((item: { id: any }) => (
          <ListWallet key={item.id} item={item} />
        ))}
      </Box>
    </>
  );
};

export default WalletScreen;
