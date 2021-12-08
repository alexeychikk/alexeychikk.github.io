import React from "react";

import { EDUCATION } from "~/config/education";
import { Timeline, InitialItem } from "~/components/Timeline";

import { EducationTimelineItem } from "./EducationTimelineItem";

import { useStyles } from "./Education.styles";

export const Education: React.FC = () => {
  const classes = useStyles();
  return (
    <Timeline className={classes.timeline} variant="secondary" color="light">
      {EDUCATION.map((edu) => (
        <EducationTimelineItem key={edu.id} {...edu} />
      ))}
      <InitialItem>School</InitialItem>
    </Timeline>
  );
};

export default Education;
