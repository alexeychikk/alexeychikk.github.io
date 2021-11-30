import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    projects: {
      maxWidth: "42em",
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
