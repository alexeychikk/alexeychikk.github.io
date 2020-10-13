import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    mapWrapper: {
      width: "100%",
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    map: {
      order: 2,
      [theme.breakpoints.up("lg")]: {
        width: "60%",
      },
    },
    contactInfo: {
      order: 1,
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "2em",
        order: 3,
      },
    },
    linkIcon: {
      fontSize: "inherit",
      marginBottom: "-0.1em",
      transform: "rotate(-45deg)",
    },
  })
);
