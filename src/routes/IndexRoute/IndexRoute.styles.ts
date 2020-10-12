import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    indexRoute: {
      height: "100%",
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      padding: 0,
    },
    headingWrapper: {
      boxShadow: theme.shadows[3],
      display: "flex",
      alignItems: "center",
      color: "#fff",
      lineHeight: 1,
      textTransform: "uppercase",
      paddingLeft: theme.spacing(2.5),
      backgroundColor: theme.palette.background.paper,
      height: "46px",
      width: "320px",
      "& a": {
        color: "#fff",
        textDecoration: "none",
      },
      [theme.breakpoints.down("sm")]: {
        boxShadow: "none",
        backgroundColor: "rgb(37, 37, 38)",
        width: "100%",
        paddingLeft: "5px",
      },
    },
    navigation: {
      flex: 1,
      alignSelf: "stretch",
    },
    toolbarIcon: {
      width: "46px",
      height: "46px",
      padding: "11px",
      marginRight: "5px",
    },
    mobileDrawerToolbar: {
      padding: theme.spacing(0, 2),
      boxShadow: theme.shadows[3],
    },
    mobileBreadcrumbs: {
      boxShadow: theme.shadows[3],
    },
    content: {
      flexGrow: 1,
      marginLeft: "320px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "28px", // breadcrumbs
        marginLeft: 0,
      },
    },
  })
);
