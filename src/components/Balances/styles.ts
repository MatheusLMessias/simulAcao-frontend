import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    //flexDirection: "row",
    width: 550,
    height: 150,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  user: {
    marginRight: 10
  },
  home: {
    marginLeft: 10
  }
}));
