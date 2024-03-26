import { Timeline as MuiTimeline } from '@material-ui/lab';
import clsx from 'clsx';
import React from 'react';

import { useStyles } from './Timeline.styles';

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  color?: 'main' | 'light';
}

const TimelineBase: React.FC<TimelineProps> = (props) => {
  const classes = useStyles();
  return (
    <MuiTimeline
      className={clsx(
        classes.timeline,
        `az-timeline-${props.variant || 'primary'}-${props.color || 'main'}`,
        props.className,
      )}
    >
      {props.children}
    </MuiTimeline>
  );
};

export const Timeline = React.memo(TimelineBase);
