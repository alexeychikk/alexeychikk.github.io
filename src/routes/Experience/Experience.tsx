import { Timeline } from "@material-ui/lab";
import React from "react";

import { EXPERIENCE } from "~/config/experience";

import {
  ExperienceTimelineItem,
  InitialCommitItem,
} from "./ExperienceTimelineItem";

import { useStyles } from "./Experience.styles";

export const Experience: React.FC = () => {
  const classes = useStyles();
  return (
    <Timeline className={classes.timeline}>
      {EXPERIENCE.map((exp) => (
        <ExperienceTimelineItem key={exp.id} {...exp} />
      ))}
      <InitialCommitItem />
    </Timeline>
  );
};

export default Experience;
