import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStyles } from "./style";

const ListMarket = ({ item }: any) => {
  let color = "white";
  
  if(item.variation > 0 && item.variation != null){
      color = "green"
  } else if(item.variation < 0 && item.variation != null){
      color = "red"
  }

  const styles = useStyles();
  return (
    <List className={styles.container} >
      <ListItem key={item.id}>  
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
          sx={{ color:`${color}`, marginTop: 2, height: 20, width: 60 }}
          primary={`+${item.variation}`}
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
                `Compra da ação ${item.name} do valor de ${item.value} efetuada com sucesso `
              )
            }
            sx={{ color: "green", marginTop: 2 }}
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

export default ListMarket;
