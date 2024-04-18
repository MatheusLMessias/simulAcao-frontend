import { List, ListItem, ListItemText } from "@mui/material";
import { useStyles } from "./style";

const TitleList = () => {
  const styles = useStyles();

  return (
    <List className={styles.container}>
      <ListItem role={undefined} dense button>
        <ListItemText
          sx={{ color: "white", marginTop: 2, height: 20, width: 50 }}
          primary="Nome"
        />
        <ListItemText
          sx={{ color: "white", marginTop: 2, height: 20, width: 50 }}
          primary="Preço"
        />
        <ListItemText
          sx={{ color: "white", marginTop: 2, height: 20, width: 50 }}
          primary="Variância"
        />
        <ListItemText
          sx={{
            color: "white",
            marginTop: 2,
            height: 20,
            width: 30,
            marginRight: 7,
          }}
          primary="Volume"
        />
      </ListItem>
    </List>
  );
};

export default TitleList;
