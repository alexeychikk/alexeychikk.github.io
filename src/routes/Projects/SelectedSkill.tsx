import React, { useCallback } from "react";
import clsx from "clsx";

import { SKILLS_MAP, SkillId } from "~/config/skills";
import { L, Sl, Fn, Kw } from "~/components/CodeLikeBlock";
import { formatMonthsAsIntervalShort } from "~/utils/date";

import { SkillGap } from "./SkillGap";
import { useStyles } from "./Projects.styles";

export interface SelectedSkillProps {
  className?: string;
  skillId: SkillId;
  monthsOfExperience: number;
  onClick?: (skillId: SkillId) => void;
}

const SelectedSkillBase: React.FC<SelectedSkillProps> = (props) => {
  const classes = useStyles();
  const skill = SKILLS_MAP[props.skillId];
  const Icon = skill.icon;
  const { monthsOfExperience } = props;

  const ExperienceWrapper =
    monthsOfExperience > 6
      ? monthsOfExperience >= 24
        ? monthsOfExperience >= 36
          ? Kw
          : Fn
        : Sl
      : React.Fragment;

  const handleClick = useCallback(() => props.onClick?.(props.skillId), [
    props.skillId,
    props.onClick,
  ]);

  return (
    <L
      className={clsx(classes.selectedSkill, props.className)}
      onClick={handleClick}
      hover
    >
      <Icon className={classes.skillIcon} /> <SkillGap name={skill.name} />|
      {monthsOfExperience >= 120 || monthsOfExperience === 0
        ? " "
        : "\u00A0".repeat(2)}
      <ExperienceWrapper>
        {formatMonthsAsIntervalShort(monthsOfExperience) || "non-commercial"}
      </ExperienceWrapper>
    </L>
  );
};

export const SelectedSkill = React.memo(SelectedSkillBase);
