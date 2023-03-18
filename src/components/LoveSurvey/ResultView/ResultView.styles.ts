import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    resultView: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
      textAlign: "center",
      [theme.breakpoints.up("lg")]: {
        justifyContent: "center",
      },
    },
    conclusion: {
      marginTop: "1.2em",
      maxWidth: "70%",
      opacity: 0,
      animation: "1s ease-in-out 1s azFadeIn",
      animationFillMode: "both",
      [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "75%",
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
      },
    },
  })
);
