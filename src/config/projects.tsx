import React from "react";

import { SkillId } from "./skills";

interface ProjectBase<Id = string> {
  id: Id;
  experienceId: string;
  name: React.ReactNode;
  description: React.ReactNode;
  skills: SkillId[];
  link?: string;
}

export const PROJECTS = (<T extends any>(p: readonly ProjectBase<T>[]) => p)(
  [] as const
);

export type ProjectId = typeof PROJECTS[number]["id"];

export type Project = ProjectBase<ProjectId>;
