import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    timelineItem: {
      "&::before": {
        flex: 0,
        padding: 0,
      },
    },
    initialItem: {},
    dot: {
      ".az-timeline-primary-main &": {
        borderColor: theme.palette.primary.main,
      },
      ".az-timeline-primary-light &": {
        borderColor: theme.palette.primary.light,
      },
      ".az-timeline-secondary-main &": {
        borderColor: theme.palette.secondary.main,
      },
      ".az-timeline-secondary-light &": {
        borderColor: theme.palette.secondary.light,
      },
      "$initialItem &": {
        ".az-timeline-primary-main &": {
          backgroundColor: theme.palette.primary.main,
        },
        ".az-timeline-primary-light &": {
          backgroundColor: theme.palette.primary.light,
        },
        ".az-timeline-secondary-main &": {
          backgroundColor: theme.palette.secondary.main,
        },
        ".az-timeline-secondary-light &": {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
    connector: {
      ".az-timeline-primary-main &": {
        backgroundColor: theme.palette.primary.main,
      },
      ".az-timeline-primary-light &": {
        backgroundColor: theme.palette.primary.light,
      },
      ".az-timeline-secondary-main &": {
        backgroundColor: theme.palette.secondary.main,
      },
      ".az-timeline-secondary-light &": {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    content: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: theme.spacing(2),
    },
    title: {
      lineHeight: 1,
      paddingTop: "0.2em",
      marginBottom: "0.2em",
      "$initialItem &": {
        ".az-timeline-primary-main &": {
          color: theme.palette.primary.main,
        },
        ".az-timeline-primary-light &": {
          color: theme.palette.primary.light,
        },
        ".az-timeline-secondary-main &": {
          color: theme.palette.secondary.main,
        },
        ".az-timeline-secondary-light &": {
          color: theme.palette.secondary.light,
        },
      },
    },
    subtitle: {
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
