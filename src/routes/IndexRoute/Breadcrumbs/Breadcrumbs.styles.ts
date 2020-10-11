import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: "rgba(204, 204, 204, 0.8)",
      padding: theme.spacing(0, 1, 0, 2),
    },
    icon: {
      width: "20px",
      height: "20px",
      marginRight: theme.spacing(1),
    },
    active: {},
    item: {
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      "&$active": {
        color: "#fff",
      },
    },
  })
);
