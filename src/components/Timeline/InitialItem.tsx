import { Typography } from "@material-ui/core";
import {
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
} from "@material-ui/lab";
import React from "react";
import clsx from "clsx";

import { useStyles } from "./TimelineItem.styles";

export interface InitialItemProps {
  children?: React.ReactNode;
  className?: string;
}

const InitialItemBase: React.FC<InitialItemProps> = (props) => {
  const classes = useStyles();
  return (
    <TimelineItem className={clsx(classes.timelineItem, props.className)}>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
      </TimelineSeparator>
      <TimelineContent className={classes.content}>
        <Typography className={classes.title} variant="h6" color="secondary">
          {props.children}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export const InitialItem = React.memo(InitialItemBase);
