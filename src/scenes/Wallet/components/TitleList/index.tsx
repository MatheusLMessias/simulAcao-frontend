import { List, ListItem, ListItemText } from "@mui/material";
import { useStyles } from "./style";

const TitleList = () => {
  const styles = useStyles();

  return (
    <List className={styles.container}>
      <ListItem role={undefined} dense>
        <ListItemText
          sx={{ color: "white", marginTop: 2, height: 20, width: 50 }}
          primary="Nome"
        />
        <ListItemText
          sx={{ color: "white", marginTop: 2, height: 20, width: 50, marginLeft: 3.3}}
          primary="Preço"
        />
        <ListItemText
          sx={{ color: "white", marginTop: 2, height: 20, width: 50, marginRight: 7 }}
          primary="Quantidade"
        />
        <ListItemText
          sx={{
            color: "white",
            marginTop: 2,
            height: 20,
            width: 50,
            marginRight: 8,
          }}
          primary="Valor total"
        />
      </ListItem>
    </List>
  );
};

export default TitleList;