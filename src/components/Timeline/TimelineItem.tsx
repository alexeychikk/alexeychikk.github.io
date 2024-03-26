import { Typography } from '@material-ui/core';
import {
  TimelineItem as MuiTimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
} from '@material-ui/lab';
import clsx from 'clsx';
import { format, addMonths } from 'date-fns';
import React from 'react';

import { useStyles } from './TimelineItem.styles';

import { CommentLikeBlock } from '~/components/CommentLikeBlock';
import { formatIntervalShort } from '~/utils/date';

export interface TimelineItemProps {
  classes?: ClassesOverride<typeof useStyles>;
  children?: React.ReactNode;
  className?: string;
  descriptionTitle?: React.ReactNode;
  dateFrom: Date;
  dateTo?: Date;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
}

const TimelineItemBase: React.FC<TimelineItemProps> = (props) => {
  const classes = useStyles(props);
  return (
    <MuiTimelineItem className={clsx(classes.timelineItem, props.className)}>
      <TimelineSeparator>
        <TimelineDot className={classes.dot} variant="outlined" />
        <TimelineConnector className={classes.connector} />
      </TimelineSeparator>

      <TimelineContent className={classes.content}>
        <Typography className={classes.title} variant="h6" color="primary">
          {props.title}
        </Typography>

        <Typography variant="body2">
          {format(props.dateFrom, 'MMM yyyy')}
          {' – '}
          {props.dateTo ? format(props.dateTo, 'MMM yyyy') : 'Present'}
          <span className={classes.timeDiff}>
            {' < '}
            {formatIntervalShort({
              start: props.dateFrom,
              end: addMonths(props.dateTo || new Date(), 1),
            })}
            {' >'}
          </span>
        </Typography>

        {props.subtitle && (
          <Typography className={classes.subtitle} variant="body1">
            {props.subtitle}
          </Typography>
        )}

        {(props.children || props.descriptionTitle) && (
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
