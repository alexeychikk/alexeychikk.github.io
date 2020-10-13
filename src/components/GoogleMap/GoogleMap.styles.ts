import { createStyles, makeStyles } from "@material-ui/core";

import { CodeLikeBlockContext } from "~/components/CodeLikeBlock";

export const useStyles = makeStyles((theme) =>
  createStyles({
    googleMap: {
      width: "100%",
    },
    iframe: {
      display: "block",
      margin: 0,
      padding: 0,
      width: "100%",
      borderRadius: "4px",
      height: (props: CodeLikeBlockContext) => props.lineHeight * 15,
      [theme.breakpoints.down("xs")]: {
        height: (props: CodeLikeBlockContext) => props.lineHeight * 10,
      },
    },
  })
);
