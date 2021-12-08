import React from "react";

import { EXPERIENCE } from "~/config/experience";
import { Timeline, InitialItem } from "~/components/Timeline";

import { ExperienceTimelineItem } from "./ExperienceTimelineItem";

import { useStyles } from "./Experience.styles";

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
