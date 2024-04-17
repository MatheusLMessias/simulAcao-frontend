import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  main: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    color: "#546e7a",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterspacing: "-0.04px",
  },
  base: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
  },
}));
