import { differenceInMonths } from "date-fns";

import { SkillId } from "~/config/skills";
import { EXPERIENCE } from "~/config/experience";
import { SKILLS_USAGE, SkillUsage } from "~/config/skillsUsage";

export function getSkillExperienceInMonths(skillId: SkillId) {
  return SKILLS_USAGE.reduce((months, { experienceId, skills }) => {
    const skillUsage = skills.find(
      (s) => ((s as SkillUsage).id || s) === skillId
    );
    if (!skillUsage) return months;

    if (typeof skillUsage === "string") {
      const experience = EXPERIENCE.find((e) => e.id === experienceId)!;
      return (
        months +
        differenceInMonths(experience.dateTo || new Date(), experience.dateFrom)
      );
    }

    return months + skillUsage.experienceInMonths;
  }, 0);
}
