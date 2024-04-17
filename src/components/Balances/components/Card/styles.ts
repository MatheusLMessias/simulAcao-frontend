import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#740000",
    width: "100vw",
    height: 60,
    margin: -8,
    padding: -8,
    alignItems:"center",
    justifyContent: "space-between"
  },
  user: {
    marginRight: 10
  },
  home: {
    marginLeft: 10
  }
}));
