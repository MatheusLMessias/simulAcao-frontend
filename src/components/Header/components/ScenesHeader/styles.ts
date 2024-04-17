import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between"
  },
  button: {
    width: 30,
    height: 400,
  },
  user: {
    display: "flex",
    //marginLeft: 100
  }
}));
