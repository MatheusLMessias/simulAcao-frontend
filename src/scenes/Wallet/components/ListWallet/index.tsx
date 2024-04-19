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
          primary={`${item.name}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.value}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.qtd}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.amount}`}
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() =>
              alert(
                `Venda de ${item.qtd} ações da ${item.name} no valor total de ${item.amount} efetuada com sucesso `
              )
            }
            sx={{ color: "red", marginTop: 1.1 }}
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
