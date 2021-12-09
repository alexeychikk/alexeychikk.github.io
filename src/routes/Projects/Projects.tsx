import React, { useMemo } from "react";

import { SKILLS, SKILLS_MAP } from "~/config/skills";
import { CodeLikeBlock, L, Br, Sl, Fn, Kw } from "~/components/CodeLikeBlock";
import { useSkillsContext } from "~/components/SkillsProvider";

import { SkillSeparator } from "./SkillSeparator";
import { SkillGap } from "./SkillGap";
import { SelectedSkill } from "./SelectedSkill";
import { useStyles } from "./Projects.styles";

export const Projects: React.FC = () => {
  const classes = useStyles();
  const {
    selectedSkills,
    selectedSkillsExperience,
    selectAllSkills,
    unselectSkill,
  } = useSkillsContext();
  console.log(selectedSkills);
  const sortedSkills = useMemo(
    () =>
      [...selectedSkills].sort(
        (s1, s2) =>
          selectedSkillsExperience[s2] - selectedSkillsExperience[s1] ||
          SKILLS.indexOf(SKILLS_MAP[s1]) - SKILLS.indexOf(SKILLS_MAP[s2])
      ),
    [selectedSkills]
  );

  return (
    <CodeLikeBlock className={classes.projects}>
      <L className={classes.line}>
        I would like to show you projects in which selected skills were used,
        but unfortunately I'm not allowed to do this because of NDA-s :(
      </L>

      <Br />

      {!selectedSkills.length && (
        <L className={classes.line}>
          Select some <Sl>skills</Sl> to see my <Fn>expertise</Fn> in them...
        </L>
      )}

      <L hover onClick={selectAllSkills}>
        <Kw>Select All Skills</Kw>
      </L>
      {!!selectedSkills.length && <Br />}

      {!!selectedSkills.length && (
        <div className={classes.skillTableWrapper}>
          <div className={classes.skillTable}>
            <L>
              <SkillGap name="Selected skills" gap={3} />| ~Experience
            </L>
            <SkillSeparator />

            {sortedSkills.map((skillId) => (
              <SelectedSkill
                key={skillId}
                skillId={skillId}
                monthsOfExperience={selectedSkillsExperience[skillId]}
                onClick={unselectSkill}
              />
            ))}
          </div>
        </div>
      )}
    </CodeLikeBlock>
  );
};

export default Projects;
