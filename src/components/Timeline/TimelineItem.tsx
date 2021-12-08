import { Typography } from "@material-ui/core";
import {
  TimelineItem as MuiTimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import React from "react";
import { format, addMonths } from "date-fns";
import clsx from "clsx";

import { formatIntervalShort } from "~/utils/date";
import { CommentLikeBlock } from "~/components/CommentLikeBlock";

import { useStyles } from "./TimelineItem.styles";

export interface TimelineItemProps {
  children?: React.ReactNode;
  className?: string;
  descriptionTitle?: React.ReactNode;
  dateFrom: Date;
  dateTo?: Date;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
}

const TimelineItemBase: React.FC<TimelineItemProps> = (props) => {
  const classes = useStyles();
  return (
    <MuiTimelineItem className={clsx(classes.timelineItem, props.className)}>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined" />
        <TimelineConnector className={classes.connector} />
      </TimelineSeparator>

      <TimelineContent className={classes.content}>
        <Typography className={classes.title} variant="h6" color="primary">
          {props.title}
        </Typography>

        <Typography variant="body2">
          {format(props.dateFrom, "MMM yyyy")}
          {" – "}
          {props.dateTo ? format(props.dateTo, "MMM yyyy") : "Present"}
          <span className={classes.timeDiff}>
            {" < "}
            {formatIntervalShort({
              start: props.dateFrom,
              end: addMonths(props.dateTo || new Date(), 1),
            })}
            {" >"}
          </span>
        </Typography>

        {props.subtitle && (
          <Typography className={classes.subtitle} variant="body1">
            {props.subtitle}
          </Typography>
        )}

        {props.children && (
          <CommentLikeBlock
            className={classes.description}
            title={props.descriptionTitle}
          >
            {props.children}
          </CommentLikeBlock>
        )}
      </TimelineContent>
    </MuiTimelineItem>
  );
};

export const TimelineItem = React.memo(TimelineItemBase);
