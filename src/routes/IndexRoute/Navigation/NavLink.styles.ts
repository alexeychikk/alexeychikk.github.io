import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    active: {},
    link: {
      display: "flex",
      alignSelf: "stretch",
      alignItems: "center",
      flexShrink: 0,
      padding: theme.spacing(0, 4, 0, 2),
      marginRight: "1px",
      textDecoration: "none",
      color: theme.palette.text.secondary,
      backgroundColor: "rgb(45,45,45)",
      "&$active": {
        color: "#fff",
        backgroundColor: theme.palette.background.default,
      },
    },
    icon: {
      height: "20px",
      width: "20px",
      marginRight: theme.spacing(1),
    },
  })
);
