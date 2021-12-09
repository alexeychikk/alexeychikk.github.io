import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    codeLikeBlock: {
      position: "relative",
      height: "100%",
      display: "flex",
      fontFamily: 'Consolas, "Courier New", monospace',
      fontSize: theme.typography.h6.fontSize,
      alignItems: "start",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.body1.fontSize,
      },
      "&::after": {
        content: `""`,
        width: "1px",
        height: "100%",
        backgroundColor: "rgb(64,64,64)",
        [theme.breakpoints.down(1440)]: {
          display: "none",
        },
      },
    },
    lineNumbers: {},
    lineNum: {
      width: theme.spacing(7),
      textAlign: "right",
      marginRight: "0.4em",
      color: theme.palette.text.secondary,
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(4),
      },
    },
    sampleLine: {
      position: "fixed",
      top: "-100px",
      visibility: "hidden",
    },
    childrenWrapper: {
      width: `calc(100% - ${theme.spacing(7)}px - 0.4em)`,
      flex: 1,
      color: "#a9b7c6",
      maxWidth: "1024px",
      [theme.breakpoints.down("sm")]: {
        width: `calc(100% - ${theme.spacing(4)}px - 0.4em)`,
      },
    },
    active: {},
    hover: {},
    git: {
      "&::before": {
        content: `""`,
        position: "absolute",
        top: 1,
        left: 0,
        width: "4px",
        bottom: 0,
        [theme.breakpoints.down("sm")]: {
          width: "3px",
        },
      },
      "&-green::before": {
        backgroundColor: "rgb(88,124,12)",
      },
      "&-blue::before": {
        backgroundColor: "rgb(12,125,157)",
      },
    },
    L: {
      paddingLeft: "1.3em",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0.6em",
      },
    },
    LChildren: {
      paddingRight: theme.spacing(2),
      "$L$active &": {
        backgroundColor: "rgb(42,42,43)",
      },
      "$L$hover &:hover": {
        cursor: "pointer",
        backgroundColor: "rgb(42,42,43)",
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
