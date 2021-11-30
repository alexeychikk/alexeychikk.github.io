import React from "react";
import clsx from "clsx";

import { SKILLS_MAP, SkillId } from "~/config/skills";
import { L } from "~/components/CodeLikeBlock";

import { useStyles } from "./Projects.styles";

export interface SelectedSkillProps {
  className?: string;
  skillId: SkillId;
}

const SelectedSkillBase: React.FC<SelectedSkillProps> = (props) => {
  const classes = useStyles();
  const skill = SKILLS_MAP[props.skillId];
  const Icon = skill.icon;

  return (
    <L className={clsx(classes.selectedSkill, props.className)}>
      <Icon className={classes.skillIcon} /> {skill.name}
    </L>
  );
};

export const SelectedSkill = React.memo(SelectedSkillBase);
