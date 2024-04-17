import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#000000",
        width: 350,
        height: 350,
      },
      carousel: {
        marginLeft: 10,
        width: 210,
        height: 290,
      },
  title: {
    color: "white",
    fontSize: 22,
  },
}));
