import React from 'react';

import { useStyles } from './Education.styles';
import { EducationTimelineItem } from './EducationTimelineItem';

import { Timeline, InitialItem, TimelineItem } from '~/components/Timeline';
import { EDUCATION } from '~/config/education';

export const Education: React.FC = () => {
  const classes = useStyles();
  return (
    <Timeline className={classes.timeline} variant="secondary" color="light">
      <TimelineItem
        title="Life"
        subtitle="Self Education"
        dateFrom={new Date(Date.UTC(1995, 1))}
      >
        I am curious about the world and the way it works. I always try to learn
        something new every day no matter whether it is about programming,
        science, technology or music.
      </TimelineItem>

      {EDUCATION.map((edu) => (
        <EducationTimelineItem key={edu.id} {...edu} />
      ))}

      <InitialItem>School</InitialItem>
    </Timeline>
  );
};

export default Education;
