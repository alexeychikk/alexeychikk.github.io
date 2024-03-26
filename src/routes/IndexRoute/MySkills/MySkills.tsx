import React, { useCallback } from 'react';

import type { MySkillCategoryProps } from './MySkillCategory';
import { MySkillCategory } from './MySkillCategory';

import FolderSrcIcon from '~/assets/icons/folder-src-open.svg?react';
import { SkillsExplorer, SkillsFolder } from '~/components/SkillsExplorer';
import { useSkillsContext } from '~/components/SkillsProvider';
import type { Skill } from '~/config/skills';
import { SKILL_CATEGORIES } from '~/config/skills';

export interface MySkillsProps {
  className?: string;
  onSkillClick: MySkillCategoryProps['onSkillClick'];
}

export const MySkillsBase: React.FC<MySkillsProps> = (props) => {
  return (
    <SkillsExplorer className={props.className}>
      <SkillsFolder
        icon={FolderSrcIcon}
        name="My Skills"
        hint="(click them)"
        expandable={false}
      >
        {SKILL_CATEGORIES.map((category) => (
          <MySkillCategory
            key={category.id}
            {...category}
            onSkillClick={props.onSkillClick}
          />
        ))}
      </SkillsFolder>
    </SkillsExplorer>
  );
};

export const MySkillsContainer: React.FC = () => {
  const { selectedSkills, selectSkill, unselectSkill } = useSkillsContext();

  const handleSkillClick = useCallback(
    (skill: Skill, active: boolean) =>
      active ? unselectSkill(skill.id) : selectSkill(skill.id),
    [selectedSkills],
  );

  return <MySkillsBase onSkillClick={handleSkillClick} />;
};

export const MySkills = React.memo(MySkillsContainer);
