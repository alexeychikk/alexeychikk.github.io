import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    skillItem: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(2.5),
      height: "26px",
      marginLeft: theme.spacing(-1),
      position: "relative",
      cursor: "pointer",
      "&::before": {
        content: "''",
        position: "absolute",
        display: "block",
        top: 0,
        bottom: 0,
        left: "-2000px",
        right: "-2000px",
      },
      "&:hover::before": {
        backgroundColor: "rgb(42,45,46)",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        display: "block",
        top: 0,
        bottom: 0,
        left: "0",
        width: "1px",
        backgroundColor: theme.palette.divider,
      },
      "&$active::before": {
        backgroundColor: "rgb(55,55,61)",
      },
    },
    icon: {
      width: "22px",
      height: "22px",
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(1),
      zIndex: 1,
    },
    childrenWrapper: {
      lineHeight: 1,
      zIndex: 1,
    },
    hint: {
      marginLeft: "0.5em",
      color: theme.palette.text.secondary,
      lineHeight: "1.5",
      zIndex: 1,
    },
    active: {},
  })
);
