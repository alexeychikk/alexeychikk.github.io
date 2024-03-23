<script lang="ts">
  import type { ComponentType } from 'svelte';
  import IconChevronDown from 'svelte-material-icons/ChevronDown.svelte';

  import IconFolderOpen from '../../../assets/icons/folder-open.svg?component';
  import Accordion from '../../common/Accordion/Accordion.svelte';

  import styles from './SkillsFolder.module.scss';

  export let icon: ComponentType = IconFolderOpen;
  export let expandable: boolean = false;

  let expanded: boolean = true;
</script>

<Accordion
  class="{styles.skillsFolder} {expanded ? styles.expanded : ''}"
  bind:expanded
  disabled={!expandable}
>
  <div
    slot="summary"
    class="{styles.summary} {expanded ? styles.expanded : ''}"
  >
    {#if expandable}
      <IconChevronDown class={styles.expandIcon} />
    {/if}
    <svelte:component this={icon} class={styles.icon} />
    <span class={styles.name}><slot name="name" /></span>
    {#if $$slots.hint}
      <span class={styles.hint}><slot name="hint" /></span>
    {/if}
  </div>

  <div slot="details" class={styles.childrenWrapper}>
    <slot />
  </div>
</Accordion>
