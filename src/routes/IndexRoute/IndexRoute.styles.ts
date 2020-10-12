import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    indexRoute: {
      height: "100%",
      display: "flex",
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
