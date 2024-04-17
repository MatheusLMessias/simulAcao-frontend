import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  body: {
    margin: 0,
    padding: 0
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    width: "100vw",
    height: "100vh",
    margin: -8,
    padding: -8
  },
  containerTextBanner: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    height: 735,
    marginLeft: 50,
    marginTop: "3rem",
  },
  containerText: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "column",
  },
  list: {
    marginTop: "3rem",
    marginBottom: "3rem",
    maxWidth: 950,
  },
}));
