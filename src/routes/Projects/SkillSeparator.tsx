import React from 'react';

import { L } from '~/components/CodeLikeBlock';
import { MAX_SKILL_NAME_LENGTH } from '~/config/skills';

export const SkillSeparator: React.FC = () => (
  <L>{'\u2014 '.repeat((MAX_SKILL_NAME_LENGTH + 22) / 2)}</L>
);
