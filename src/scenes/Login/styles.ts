import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    width: "100vw",
    height: "100vh",
    margin: -8,
    padding: -8,
    alignItems:"center",
    justifyContent:"center"
  },
  button: {
    width: 30,
    height: 400,
  }
}));
