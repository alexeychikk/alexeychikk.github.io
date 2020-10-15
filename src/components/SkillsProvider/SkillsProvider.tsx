import React, { createContext, useMemo, useContext } from "react";
import { useHistory } from "react-router-dom";

import { SkillId } from "~/config/skills";
import { useQuery } from "~/hooks";

export type SkillIdsMap = Partial<{ [key in SkillId]: true }>;

export interface SkillsContext {
  selectedSkills: SkillId[];
  selectedSkillsMap: SkillIdsMap;
  selectSkill(id: SkillId): void;
  unselectSkill(id: SkillId): void;
  clearSelectedSkills(): void;
}

const context = createContext<SkillsContext>({
  selectedSkills: [],
  selectedSkillsMap: {},
  selectSkill: () => {},
  unselectSkill: () => {},
  clearSelectedSkills: () => {},
});

export interface SkillsProviderProps {}

export const SkillsProvider: React.FC<SkillsProviderProps> = (props) => {
  const history = useHistory();
  const query = useQuery();

  const skillsQuery = query.get("skills");
  const selectedSkills = (skillsQuery
    ? skillsQuery.split(",")
    : []) as SkillId[];
  const selectedSkillsMap = selectedSkills.reduce((res: SkillIdsMap, id) => {
    res[id] = true;
    return res;
  }, {});

  const setSelectedSkills = (skills: SkillId[]) => {
    history.push({
      pathname: "/projects",
      search: skills.length ? `?skills=${skills.join(",")}` : "",
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

  const clearSelectedSkills = () => {
    if (!selectedSkills.length) {
      return;
    }
    setSelectedSkills([]);
  };

  const value = useMemo(
    () => ({
      selectedSkills,
      selectedSkillsMap,
      selectSkill,
      unselectSkill,
      clearSelectedSkills,
    }),
    [selectedSkills]
  );

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export const useSkillsContext = () => useContext(context);
