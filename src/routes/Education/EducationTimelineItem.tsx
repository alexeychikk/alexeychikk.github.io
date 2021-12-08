import React from "react";

import { Education } from "~/config/education";
import { TimelineItem } from "~/components/Timeline";

export interface EducationTimelineItemProps extends Education {}

const EducationTimelineItemBase: React.FC<EducationTimelineItemProps> = (
  props
) => {
  return (
    <TimelineItem
      title={props.name}
      subtitle={`${props.degree}, ${props.field}`}
      dateFrom={props.dateFrom}
      dateTo={props.dateTo}
      descriptionTitle={`Grade: ${props.grade}`}
    />
  );
};

export const EducationTimelineItem = React.memo(EducationTimelineItemBase);
