import { Timeline as MuiTimeline } from "@material-ui/lab";
import React from "react";
import clsx from "clsx";

import { useStyles } from "./Timeline.styles";

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

const TimelineBase: React.FC<TimelineProps> = (props) => {
  const classes = useStyles();
  return (
    <MuiTimeline className={clsx(classes.timeline, props.className)}>
      {props.children}
    </MuiTimeline>
  );
};

export const Timeline = React.memo(TimelineBase);
