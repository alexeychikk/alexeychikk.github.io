import React, { useMemo } from "react";

import { CodeLikeBlock, L, Br, Fn } from "~/components/CodeLikeBlock";
import { useSkillsContext } from "~/components/SkillsProvider";
import { pluralize } from "~/utils/pluralize";
import { SelectedSkill } from "./SelectedSkill";

import { useStyles } from "./Projects.styles";
import { SKILLS, SKILLS_MAP } from "~/config/skills";

export const Projects: React.FC = () => {
  const classes = useStyles();
  const { selectedSkills } = useSkillsContext();
  const sortedSkills = useMemo(
    () =>
      [...selectedSkills].sort(
        (s1, s2) =>
          SKILLS.indexOf(SKILLS_MAP[s1]) - SKILLS.indexOf(SKILLS_MAP[s2])
      ),
    [selectedSkills]
  );

  return (
    <CodeLikeBlock>
      <L className={classes.projects}>
        I would like to show you projects in which selected skills were used,
        but unfortunately I'm not allowed to do this because of NDA-s :(
      </L>

      <Br />

      {selectedSkills.length ? (
        <L>
          You've selected <Fn>{selectedSkills.length}</Fn>{" "}
          {pluralize(selectedSkills.length, "skill")}:
        </L>
      ) : (
        <L>Select some skills to see them here...</L>
      )}
      {sortedSkills.map((skillId) => (
        <SelectedSkill key={skillId} skillId={skillId} />
      ))}
    </CodeLikeBlock>
  );
};

export default Projects;
