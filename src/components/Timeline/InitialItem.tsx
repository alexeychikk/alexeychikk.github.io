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
  classes?: ClassesOverride<typeof useStyles>;
  className?: string;
}

const InitialItemBase: React.FC<InitialItemProps> = (props) => {
  const classes = useStyles(props);
  return (
    <TimelineItem
      className={clsx(
        classes.timelineItem,
        classes.initialItem,
        props.className
      )}
    >
      <TimelineSeparator>
        <TimelineDot className={classes.dot} />
      </TimelineSeparator>
      <TimelineContent className={classes.content}>
        <Typography className={classes.title} variant="h6">
          {props.children}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export const InitialItem = React.memo(InitialItemBase);
