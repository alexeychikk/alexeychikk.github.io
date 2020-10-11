import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: theme.typography.h6.fontSize,
      paddingTop: theme.spacing(2),
      alignItems: "start",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1),
        fontSize: theme.typography.body1.fontSize,
      },
    },
    lines: {},
    line: {
      width: theme.spacing(7),
      textAlign: "right",
      marginRight: theme.spacing(4),
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(4),
        marginRight: theme.spacing(2),
      },
    },
    sampleLine: {
      position: "fixed",
      top: "-100px",
      visibility: "hidden",
    },
    childrenWrapper: {
      flex: 1,
      color: "#a9b7c6",
      maxWidth: "1024px",
      paddingRight: theme.spacing(2),
      "& p": {
        margin: 0,
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: theme.spacing(1),
      },
    },
    Kw: {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    Fn: {
      color: theme.palette.primary.light,
    },
    Sl: {
      color: theme.palette.secondary.light,
    },
    Vn: {
      color: theme.palette.secondary.main,
    },
  })
);
