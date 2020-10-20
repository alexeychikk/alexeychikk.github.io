import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    expTimelineItem: {
      "&::before": {
        flex: 0,
        padding: 0,
      },
    },
    connector: {
      backgroundColor: theme.palette.secondary.main,
    },
    content: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: theme.spacing(2),
    },
    companyName: {
      lineHeight: 1,
      paddingTop: "2px",
      marginBottom: "0.2em",
    },
    position: {
      color: "#fff",
      fontWeight: 500,
    },
    timeDiff: {
      color: "rgba(255,255,255,0.5)",
    },
    description: {
      fontSize: theme.typography.body1.fontSize,
      height: "auto",
    },
  })
);
