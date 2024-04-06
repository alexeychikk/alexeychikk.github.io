import { getContext, setContext } from 'svelte';
import { type Readable, get, derived } from 'svelte/store';
import { navigate, useLocation } from 'svelte-routing';

import { SKILLS } from '../config/skills';

import { getSkillExperienceInMonths } from './lib';

const CONTEXT = Symbol('Skills');

export type SkillsContext = {
  selectedSkills: Readable<string[]>;
  selectedSkillsExperience: Readable<Record<string, number>>;
  selectSkill(id: string): void;
  unselectSkill(id: string): void;
  toggleSkill(id: string): void;
  selectAllSkills(): void;
  clearSelectedSkills(): void;
};

export function createSkillsContext(): SkillsContext {
  const location = useLocation();

  const selectedSkills = derived(location, (value) => {
    const params = new URLSearchParams(value.search);
    return params.get('skills')?.split(',') ?? [];
  });

  const selectedSkillsExperience = derived(selectedSkills, (value) => {
    return value.reduce(
      (acc, skill) => {
        acc[skill] = getSkillExperienceInMonths(skill);
        return acc;
      },
      {} as Record<string, number>,
    );
  });

  const setSelectedSkills = (skills: string[]) => {
    const currentLocation = get(location);
    const search = skills.length ? `?skills=${skills.join(',')}` : '';
    navigate(`/projects${search}`, {
      replace: currentLocation.pathname === '/projects',
      preserveScroll: true,
    });
  };

  const selectSkill = (skill: string) => {
    const skills = get(selectedSkills);
    if (skills.includes(skill)) return;
    setSelectedSkills([...skills, skill]);
  };

  const unselectSkill = (skill: string) => {
    const skills = get(selectedSkills);
    const newSkills = skills.filter((id) => id !== skill);
    if (newSkills.length === skills.length) return;
    setSelectedSkills(newSkills);
  };

  const toggleSkill = (skill: string) => {
    if (skill in get(selectedSkillsExperience)) {
      unselectSkill(skill);
    } else {
      selectSkill(skill);
    }
  };

  const selectAllSkills = () => {
    const skills = get(selectedSkills);
    if (skills.length === SKILLS.length) return;
    setSelectedSkills(SKILLS.map((skill) => skill.id));
  };

  const clearSelectedSkills = () => {
    const skills = get(selectedSkills);
    if (!skills.length) return;
    setSelectedSkills([]);
  };

  const context = {
    selectedSkills,
    selectedSkillsExperience,
    selectSkill,
    unselectSkill,
    toggleSkill,
    selectAllSkills,
    clearSelectedSkills,
  };

  setContext(CONTEXT, context);

  return context;
}

export function getSkillsContext(): SkillsContext {
  return getContext(CONTEXT);
}
