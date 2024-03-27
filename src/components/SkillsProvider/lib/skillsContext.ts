import { createContext, useContext } from 'react';

import type { SkillId } from '~/config/skills';

export interface SkillsContext {
  selectedSkills: SkillId[];
  selectedSkillsExperience: Record<SkillId, number>;
  selectSkill(id: SkillId): void;
  unselectSkill(id: SkillId): void;
  selectAllSkills(): void;
  clearSelectedSkills(): void;
}

export const skillsContext = createContext<SkillsContext>({
  selectedSkills: [],
  selectedSkillsExperience: {} as Record<SkillId, number>,
  selectSkill: () => {},
  unselectSkill: () => {},
  selectAllSkills: () => {},
  clearSelectedSkills: () => {},
});

export const useSkillsContext = () => useContext(skillsContext);
