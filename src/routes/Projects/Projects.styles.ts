import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    projects: {
      width: "100%",
    },
    line: {
      maxWidth: "42em",
    },
    skillTableWrapper: {
      overflowX: "auto",
      width: "100%",
    },
    skillTable: {
      width: "100%",
      minWidth: "440px",
    },
    selectedSkill: {
      color: theme.palette.text.primary,
    },
    skillIcon: {
      width: "1.2em",
      height: "1.2em",
      display: "inline",
      marginBottom: "-0.25em",
    },
  })
);
