import React, { useCallback } from 'react';

import { SkillItem } from '~/components/SkillsExplorer';
import type { Skill } from '~/config/skills';

export interface MySkillItemProps extends Skill {
  active?: boolean;
  onClick: (skill: Skill, isActive: boolean) => void;
}

export const MySkillItem: React.FC<MySkillItemProps> = ({
  onClick,
  active,
  ...skill
}) => {
  const handleClick = useCallback(() => {
    onClick(skill, !!active);
  }, [skill.id, onClick]);

  return (
    <SkillItem
      icon={skill.icon}
      hint={skill.hint}
      onClick={handleClick}
      active={active}
    >
      {skill.name}
    </SkillItem>
  );
};
