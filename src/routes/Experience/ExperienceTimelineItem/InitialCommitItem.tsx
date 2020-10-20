import { Typography } from "@material-ui/core";
import {
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
} from "@material-ui/lab";
import React from "react";

import { useStyles } from "./ExperienceTimelineItem.styles";

const InitialCommitItemBase: React.FC = () => {
  const classes = useStyles();
  return (
    <TimelineItem className={classes.expTimelineItem}>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
      </TimelineSeparator>
      <TimelineContent className={classes.content}>
        <Typography
          className={classes.companyName}
          variant="h6"
          color="secondary"
        >
          Initial commit
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export const InitialCommitItem = React.memo(InitialCommitItemBase);
