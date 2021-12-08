import React from "react";

import { Experience } from "~/config/experience";
import { LinkOpen } from "~/components/LinkOpen";
import { TimelineItem } from "~/components/Timeline";

export interface ExperienceTimelineItemProps extends Experience {}

const ExperienceTimelineItemBase: React.FC<ExperienceTimelineItemProps> = (
  props
) => {
  const title = props.company.link ? (
    <LinkOpen href={props.company.link} hasLinkIcon>
      {props.company.name}
    </LinkOpen>
  ) : (
    props.company.name
  );

  return (
    <TimelineItem
      title={title}
      subtitle={props.position}
      dateFrom={props.dateFrom}
      dateTo={props.dateTo}
      descriptionTitle={props.company.link ? "About the company" : "About"}
    >
      {props.company.description}
    </TimelineItem>
  );
};

export const ExperienceTimelineItem = React.memo(ExperienceTimelineItemBase);
