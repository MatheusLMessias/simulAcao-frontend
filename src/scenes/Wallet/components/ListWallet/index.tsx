import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useStyles } from "./style";

const ListWallet = ({ item }: any) => {
  const styles = useStyles();
  return (
    <List className={styles.container}>
      <ListItem key={item.id} role={undefined} dense>
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.nome}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.preco}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.quantidade}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.valorTotal}`}
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() =>
              alert(
                `Venda de ${item.quantidade} ações da ${item.nome} no valor total de ${item.valorTotal} efetuada com sucesso `
              )
            }
            sx={{ color: "white", marginTop: 1.1 }}
            edge="end"
            aria-label="comments"
          >
            <AttachMoneyIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default ListWallet;
