import React from "react";

import { MAX_SKILL_NAME_LENGTH } from "~/config/skills";

export interface SkillGapProps {
  name: string;
  gap?: number;
}

export const SkillGap: React.FC<SkillGapProps> = (props) => (
  <>
    {props.name}
    {"\u00A0".repeat(
      MAX_SKILL_NAME_LENGTH + 1 + (props.gap || 0) - props.name.length
    )}
  </>
);
