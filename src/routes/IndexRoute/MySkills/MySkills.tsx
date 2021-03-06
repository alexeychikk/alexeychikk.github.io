import React, { useCallback } from "react";

import { ReactComponent as FolderSrcIcon } from "~/assets/icons/folder-src-open.svg";

import { SkillsExplorer, SkillsFolder } from "~/components/SkillsExplorer";
import { useSkillsContext } from "~/components/SkillsProvider";
import { SKILL_CATEGORIES, Skill } from "~/config/skills";

import { MySkillCategory, MySkillCategoryProps } from "./MySkillCategory";

export interface MySkillsProps {
  className?: string;
  onSkillClick: MySkillCategoryProps["onSkillClick"];
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
    [selectedSkills]
  );

  return <MySkillsBase onSkillClick={handleSkillClick} />;
};

export const MySkills = React.memo(MySkillsContainer);
