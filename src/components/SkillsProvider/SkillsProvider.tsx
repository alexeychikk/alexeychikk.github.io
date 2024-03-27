import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { getSkillExperienceInMonths, skillsContext } from './lib';

import type { SkillId } from '~/config/skills';
import { SKILLS } from '~/config/skills';
import { useQuery } from '~/hooks';

export interface SkillsProviderProps {}

export const SkillsProvider: React.FC<SkillsProviderProps> = (props) => {
  const history = useHistory();
  const query = useQuery();

  const skillsQuery = query.get('skills');
  const selectedSkills = (
    skillsQuery ? skillsQuery.split(',') : []
  ) as SkillId[];
  const selectedSkillsExperience = selectedSkills.reduce(
    (res, id) => {
      res[id] = getSkillExperienceInMonths(id);
      return res;
    },
    {} as Record<SkillId, number>,
  );

  const setSelectedSkills = (skills: SkillId[]) => {
    history.push({
      pathname: '/projects',
      search: skills.length ? `?skills=${skills.join(',')}` : '',
    });
  };

  const selectSkill = (skillId: SkillId) => {
    if (selectedSkills.includes(skillId)) {
      return;
    }
    setSelectedSkills([...selectedSkills, skillId]);
  };

  const unselectSkill = (skillId: SkillId) => {
    const newSkills = selectedSkills.filter((id) => id !== skillId);
    if (newSkills.length === selectedSkills.length) {
      return;
    }
    setSelectedSkills(newSkills);
  };

  const selectAllSkills = () => {
    if (selectedSkills.length === SKILLS.length) {
      return;
    }
    setSelectedSkills(SKILLS.map((skill) => skill.id));
  };

  const clearSelectedSkills = () => {
    if (!selectedSkills.length) {
      return;
    }
    setSelectedSkills([]);
  };

  const value = useMemo(
    () => ({
      selectedSkills,
      selectedSkillsExperience,
      selectSkill,
      selectAllSkills,
      unselectSkill,
      clearSelectedSkills,
    }),
    [selectedSkills],
  );

  return (
    <skillsContext.Provider value={value}>
      {props.children}
    </skillsContext.Provider>
  );
};
