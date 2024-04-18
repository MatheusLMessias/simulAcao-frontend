import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyles } from "./style";

const CheckboxList = ({ item }: any) => {
  const styles = useStyles();
  return (
    <List className={styles.container}>
      <ListItem key={item.id} role={undefined} dense button>
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
          primary={`${item.variancia}`}
        />
        <ListItemText
          id={item.id}
          sx={{ color: "white", marginTop: 2, height: 20, width: 60 }}
          primary={`${item.volume}`}
        />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() =>
              alert(
                `Compra da ação ${item.nome} do valor de ${item.preco} efetuada com sucesso `
              )
            }
            sx={{ color: "white", marginTop: 2 }}
            edge="end"
            aria-label="comments"
          >
            <ShoppingCartIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default CheckboxList;
