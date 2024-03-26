import React from 'react';

import type { MySkillItemProps } from './MySkillItem';
import { MySkillItem } from './MySkillItem';

import { SkillsFolder } from '~/components/SkillsExplorer';
import { useSkillsContext } from '~/components/SkillsProvider';
import type { SkillCategory } from '~/config/skills';
import { SKILLS } from '~/config/skills';

export interface MySkillCategoryProps extends SkillCategory {
  onSkillClick: MySkillItemProps['onClick'];
}

export const MySkillCategory: React.FC<MySkillCategoryProps> = (props) => {
  const { selectedSkillsExperience } = useSkillsContext();
  const skills = SKILLS.filter((s) => s.categoryId === props.id);

  return (
    <SkillsFolder name={props.name} icon={props.icon} expandable>
      {skills.map((skill) => (
        <MySkillItem
          key={skill.id}
          onClick={props.onSkillClick}
          active={skill.id in selectedSkillsExperience}
          {...skill}
        />
      ))}
    </SkillsFolder>
  );
};
