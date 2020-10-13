import React, { useCallback } from "react";

import { Skill } from "~/config/skills";
import { SkillItem } from "~/components/SkillsExplorer";

export interface MySkillItemProps extends Skill {
  onClick: (skill: Skill) => void;
}

export const MySkillItem: React.FC<MySkillItemProps> = ({
  onClick,
  ...skill
}) => {
  const handleClick = useCallback(() => {
    onClick(skill);
  }, [skill.id]);

  return (
    <SkillItem icon={skill.icon} hint={skill.hint} onClick={handleClick}>
      {skill.name}
    </SkillItem>
  );
};
