import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    breadcrumbs: {
      color: "rgba(204, 204, 204, 0.8)",
      padding: theme.spacing(0, 1, 0, 2),
    },
    icon: {
      width: "20px",
      height: "20px",
      marginRight: theme.spacing(1),
    },
    active: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    item: {
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      "&$active": {
        color: "#fff",
      },
    },
    link: {
      color: "inherit",
      textDecoration: "none",
    },
    menu: {
      backgroundColor: "rgb(37,37,38)",
    },
  })
);
