import React from "react";

import { SkillId } from "./skills";

export interface Project {
  id: string;
  experienceId: string;
  name: React.ReactNode;
  description: React.ReactNode;
  skills: SkillId[];
  link?: string;
}

export const PROJECTS: Project[] = [];
