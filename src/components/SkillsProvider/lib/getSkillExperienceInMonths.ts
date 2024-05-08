import { differenceInMonths } from 'date-fns';

import { EXPERIENCE } from '~/config/experience';
import type { SkillId } from '~/config/skills';
import {
  SKILLS_USAGE,
  CONTINUOUSLY_LEARNING_SKILLS,
} from '~/config/skillsUsage';

export function getSkillExperienceInMonths(skillId: SkillId): number {
  let prevDateTo: Date | undefined;
  let str: string;
  dev: str = `[${skillId}]`;

  const totalMonths = EXPERIENCE.reduceRight((acc, experience) => {
    const experienceSkills = SKILLS_USAGE.find(
      (usage) => usage.experienceId === experience.id,
    );
    const skillUsage = experienceSkills?.skills.find((skill) =>
      typeof skill === 'string' ? skill === skillId : skill.id === skillId,
    );
    const learningSkill = CONTINUOUSLY_LEARNING_SKILLS[skillId];

    if (!skillUsage && !learningSkill) return acc;

    const dateFrom =
      ((learningSkill?.dateFrom?.getTime() || 0) >
        experience.dateFrom.getTime() &&
        learningSkill?.dateFrom) ||
      experience.dateFrom;

    let months =
      (typeof skillUsage !== 'string' && skillUsage?.experienceInMonths) ||
      Math.max(
        0,
        differenceInMonths(experience.dateTo || new Date(), dateFrom),
      ) * (skillUsage ? 1 : learningSkill?.learningTimeRatio ?? 1);

    let substr: string;
    dev: substr = +months.toFixed(1)
      ? `-(${+months.toFixed(1)}|${experienceSkills?.experienceId || '@'})${skillUsage ? '' : '*'}`
      : '';

    if (prevDateTo && learningSkill) {
      const dateTo =
        ((learningSkill?.dateFrom?.getTime() || 0) > prevDateTo.getTime() &&
          learningSkill.dateFrom) ||
        prevDateTo;
      const gapMonths =
        Math.max(0, differenceInMonths(experience.dateFrom, dateTo)) *
        (learningSkill.learningTimeRatio ?? 1);

      months += gapMonths;
      dev: substr = +gapMonths.toFixed(1)
        ? `-(${+gapMonths.toFixed(1)}|@)` + substr
        : substr;
    }

    prevDateTo = experience.dateTo;
    dev: str += substr;
    return acc + months;
  }, 0);

  dev: str += `=${+totalMonths.toFixed(1)}`;
  dev: console.log(str);

  return totalMonths;
}
