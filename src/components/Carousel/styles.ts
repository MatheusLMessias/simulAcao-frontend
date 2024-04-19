import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "black",
    width: 700,
    height: 400,
  },
  carousel: {
    width: 350,
    height: 400,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bolder"
  },
}));
