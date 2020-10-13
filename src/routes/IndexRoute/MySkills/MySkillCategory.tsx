import React, { useMemo } from "react";

import { SkillCategory, SKILLS, Skill } from "~/config/skills";
import { SkillsFolder } from "~/components/SkillsExplorer";

import { MySkillItem } from "./MySkillItem";

export interface MySkillCategoryProps extends SkillCategory {
  onSkillClick: (skill: Skill) => void;
}

export const MySkillCategory: React.FC<MySkillCategoryProps> = (props) => {
  const skills = useMemo(
    () => SKILLS.filter((s) => s.categoryId === props.id),
    [props.id]
  );

  return (
    <SkillsFolder name={props.name} icon={props.icon} expandable>
      {skills.map((skill) => (
        <MySkillItem key={skill.id} onClick={props.onSkillClick} {...skill} />
      ))}
    </SkillsFolder>
  );
};
