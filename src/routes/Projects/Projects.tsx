import React from "react";

import { CodeLikeBlock, L } from "~/components/CodeLikeBlock";
import { useSkillsContext } from "~/components/SkillsProvider";

import { useStyles } from "./Projects.styles";

export const Projects: React.FC = () => {
  const {
    selectedSkills,
    unselectSkill,
    clearSelectedSkills,
  } = useSkillsContext();
  return (
    <CodeLikeBlock>
      {selectedSkills.map((skill) => (
        <L key={skill} onClick={() => unselectSkill(skill)}>
          {skill}
        </L>
      ))}
      <L onClick={clearSelectedSkills}>Clear</L>
    </CodeLikeBlock>
  );
};

export default Projects;
