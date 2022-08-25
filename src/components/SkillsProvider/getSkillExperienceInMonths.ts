import { differenceInMonths } from "date-fns";

import { SkillId } from "~/config/skills";
import { EXPERIENCE, Experience } from "~/config/experience";
import {
  SKILLS_USAGE,
  SkillUsage,
  JobSkills,
  CONTINUOUSLY_LEARNING_SKILLS,
} from "~/config/skillsUsage";

export function getSkillExperienceInMonths(skillId: SkillId): number {
  let stillUsingSkillInExperience = false;
  let lastExperienceWithSkill: Experience | undefined;

  let totalMonths = SKILLS_USAGE.reduce(
    (months, { experienceId, skills }: JobSkills) => {
      const skillUsage = skills.find(
        (s) => ((s as SkillUsage).id || s) === skillId
      );
      if (!skillUsage) return months;

      const experience = EXPERIENCE.find((e) => e.id === experienceId)!;
      if (!lastExperienceWithSkill) lastExperienceWithSkill = experience;

      if (typeof skillUsage === "string") {
        if (!experience.dateTo) stillUsingSkillInExperience = true;
        return (
          months +
          differenceInMonths(
            experience.dateTo || new Date(),
            experience.dateFrom
          )
        );
      }

      return months + skillUsage.experienceInMonths;
    },
    0
  );

  const learningSkill = CONTINUOUSLY_LEARNING_SKILLS[skillId];
  if (stillUsingSkillInExperience || !learningSkill) return totalMonths;

  if (!lastExperienceWithSkill)
    lastExperienceWithSkill = EXPERIENCE[EXPERIENCE.length - 1];
  return (
    totalMonths +
    Math.round(
      differenceInMonths(
        new Date(),
        learningSkill.dateFrom || lastExperienceWithSkill.dateTo!
      ) * (learningSkill.learningTimeRatio || 1)
    )
  );
}
