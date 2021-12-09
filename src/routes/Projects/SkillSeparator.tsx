import React from "react";

import { MAX_SKILL_NAME_LENGTH } from "~/config/skills";
import { L } from "~/components/CodeLikeBlock";

export const SkillSeparator: React.FC = () => (
  <L>{"\u2014 ".repeat((MAX_SKILL_NAME_LENGTH + 22) / 2)}</L>
);
