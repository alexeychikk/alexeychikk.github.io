import React from "react";

import { SkillId } from "./skills";
import { ExperienceId } from "./experience";

interface ProjectBase<Id = string> {
  id: Id;
  experienceId: ExperienceId;
  name: React.ReactNode;
  description: React.ReactNode;
  skills: readonly SkillId[];
  link?: string;
}

export const PROJECTS = (<T extends any>(p: readonly ProjectBase<T>[]) => p)(
  [] as const
);

export type ProjectId = typeof PROJECTS[number]["id"];

export type Project = ProjectBase<ProjectId>;
