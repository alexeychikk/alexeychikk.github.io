<script lang="ts">
  import IconFolderSrcOpen from '../../../assets/icons/folder-src-open.svg?component';
  import { SKILL_CATEGORIES, SKILLS } from '../../../config/skills';
  import { getSkillsContext } from '../../../stores';
  import SkillsExplorer, { SkillItem, SkillsFolder } from '../SkillsExplorer';

  const { selectedSkillsExperience, toggleSkill } = getSkillsContext();
</script>

<SkillsExplorer class={$$restProps.class}>
  <SkillsFolder icon={IconFolderSrcOpen}>
    <svelte:fragment slot="name">My Skills</svelte:fragment>
    <svelte:fragment slot="hint">(click them)</svelte:fragment>
    <svelte:fragment>
      {#each SKILL_CATEGORIES as category (category.id)}
        <SkillsFolder icon={category.icon} expandable>
          <svelte:fragment slot="name">{category.name}</svelte:fragment>
          <svelte:fragment>
            {#each SKILLS.filter((s) => s.categoryId === category.id) as skill (skill.id)}
              <SkillItem
                icon={skill.icon}
                active={skill.id in $selectedSkillsExperience}
                on:click={() => toggleSkill(skill.id)}
              >
                <svelte:fragment slot="hint">
                  {skill.hint || ''}
                </svelte:fragment>
                <svelte:fragment>{skill.name}</svelte:fragment>
              </SkillItem>
            {/each}
          </svelte:fragment>
        </SkillsFolder>
      {/each}
    </svelte:fragment>
  </SkillsFolder>
</SkillsExplorer>
