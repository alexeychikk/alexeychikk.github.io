import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    linkLine: {
      "& > span": {
        fontSize: "inherit",
        display: "inline-block",
        verticalAlign: "bottom",
      },
    },
  })
);
