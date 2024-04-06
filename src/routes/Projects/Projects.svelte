<script lang="ts">
  import CodeLikeBlock, {
    Br,
    Fn,
    Kw,
    L,
    Sl,
  } from '../../components/special/CodeLikeBlock';
  import { SKILLS, SKILLS_MAP } from '../../config/skills';
  import { getSkillsContext } from '../../stores';

  import styles from './Projects.module.scss';
  import SelectedSkill from './SelectedSkill.svelte';
  import SkillGap from './SkillGap.svelte';
  import SkillSeparator from './SkillSeparator.svelte';

  const {
    selectedSkills,
    selectedSkillsExperience,
    selectAllSkills,
    unselectSkill,
  } = getSkillsContext();

  $: sortedSkills = [...$selectedSkills].sort(
    (s1, s2) =>
      $selectedSkillsExperience[s2] - $selectedSkillsExperience[s1] ||
      SKILLS.indexOf(SKILLS_MAP[s1]) - SKILLS.indexOf(SKILLS_MAP[s2]),
  );
</script>

<CodeLikeBlock class={styles.projects}>
  <L class={styles.line}>
    I would like to show you projects in which selected skills were used, but
    unfortunately I'm not allowed to do this because of NDA-s :(
  </L>

  <Br />

  {#if !$selectedSkills.length}
    <L class={styles.line}>
      Select some <Sl>skills</Sl> to see my <Fn>expertise</Fn> in them...
    </L>
  {/if}

  <L hover on:click={selectAllSkills}><Kw>Select All Skills</Kw></L>
  {#if $selectedSkills.length}
    <Br />
  {/if}

  {#if $selectedSkills.length}
    <div class={styles.skillTableWrapper}>
      <div class={styles.skillTable}>
        <L>
          <SkillGap name="Selected skills" gap={3} />| ~Experience
        </L>
        <SkillSeparator />

        {#each sortedSkills as skillId (skillId)}
          <SelectedSkill
            {skillId}
            monthsOfExperience={$selectedSkillsExperience[skillId]}
            on:click={() => unselectSkill(skillId)}
          />
        {/each}
      </div>
    </div>
  {/if}
</CodeLikeBlock>
