import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#000000",
    width: "100vw",
    height: 60,
    margin: -8,
    padding: -8,
    alignItems:"center",
    justifyContent: "space-between"
  },
  button: {
    width: 30,
    height: 400,
  },
  user: {
    marginRight: 10
  },
  home: {
    marginLeft: 10
  }
}));
