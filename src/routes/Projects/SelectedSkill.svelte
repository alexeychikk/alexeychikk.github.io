<script lang="ts">
  import { clsx } from 'clsx';

  import Slot from '../../components/common/Slot';
  import { Fn, Kw, L, Sl } from '../../components/special/CodeLikeBlock';
  import { SKILLS_MAP } from '../../config/skills';
  import { formatMonthsAsIntervalShort } from '../../utils';

  import styles from './Projects.module.scss';
  import SkillGap from './SkillGap.svelte';

  export let skillId: string;
  export let monthsOfExperience: number;

  $: skill = SKILLS_MAP[skillId];
  $: ExperienceWrapper =
    monthsOfExperience > 6
      ? monthsOfExperience >= 24
        ? monthsOfExperience >= 36
          ? Kw
          : Fn
        : Sl
      : Slot;
</script>

<L class={clsx(styles.selectedSkill, $$restProps.class)} hover on:click>
  <svelte:component this={skill.icon} class={styles.skillIcon} />
  <SkillGap name={skill?.name} />|
  <svelte:component this={ExperienceWrapper}>
    {(monthsOfExperience >= 120 || monthsOfExperience === 0 ? ' ' : '\u00A0') +
      (formatMonthsAsIntervalShort(monthsOfExperience) || 'non-commercial')}
  </svelte:component>
</L>
