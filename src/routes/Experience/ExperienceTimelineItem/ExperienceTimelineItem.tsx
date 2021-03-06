import { Typography } from "@material-ui/core";
import {
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import React from "react";
import { format, addMonths } from "date-fns";

import { Experience } from "~/config/experience";
import { formatIntervalShort } from "~/utils/date";
import { LinkOpen } from "~/components/LinkOpen";
import { CommentLikeBlock } from "~/components/CommentLikeBlock";

import { useStyles } from "./ExperienceTimelineItem.styles";

export interface ExperienceTimelineItemProps extends Experience {}

const ExperienceTimelineItemBase: React.FC<ExperienceTimelineItemProps> = (
  props
) => {
  const classes = useStyles();
  return (
    <TimelineItem className={classes.expTimelineItem}>
      <TimelineSeparator>
        <TimelineDot color="secondary" variant="outlined" />
        <TimelineConnector className={classes.connector} />
      </TimelineSeparator>

      <TimelineContent className={classes.content}>
        <Typography
          className={classes.companyName}
          variant="h6"
          color="primary"
        >
          {props.company.link ? (
            <LinkOpen href={props.company.link} hasLinkIcon>
              {props.company.name}
            </LinkOpen>
          ) : (
            props.company.name
          )}
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

        <Typography className={classes.position} variant="body1">
          {props.position}
        </Typography>

        <CommentLikeBlock
          className={classes.description}
          title={props.company.link ? "About the company" : "About"}
        >
          {props.company.description}
        </CommentLikeBlock>
      </TimelineContent>
    </TimelineItem>
  );
};

export const ExperienceTimelineItem = React.memo(ExperienceTimelineItemBase);
