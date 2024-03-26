import React from 'react';

import { useStyles } from './Experience.styles';
import { ExperienceTimelineItem } from './ExperienceTimelineItem';

import { Timeline, InitialItem } from '~/components/Timeline';
import { EXPERIENCE } from '~/config/experience';

export const Experience: React.FC = () => {
  const classes = useStyles();
  return (
    <Timeline className={classes.timeline} variant="secondary" color="main">
      {EXPERIENCE.map((exp) => (
        <ExperienceTimelineItem key={exp.id} {...exp} />
      ))}
      <InitialItem>Initial commit</InitialItem>
    </Timeline>
  );
};

export default Experience;
