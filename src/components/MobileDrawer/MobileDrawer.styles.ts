import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
  createStyles({
    mobileDrawerPaper: {
      borderRight: "none",
      width: "320px",
    },
  })
);
