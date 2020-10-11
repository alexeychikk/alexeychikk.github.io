import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(2.5),
      height: "26px",
      borderLeft: `1px solid ${theme.palette.divider}`,
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
        backgroundColor: "#5f717630",
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
  })
);
