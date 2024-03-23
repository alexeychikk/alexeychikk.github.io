<script lang="ts">
  import type { ComponentType } from 'svelte';

  import styles from './SkillItem.module.scss';

  export let icon: ComponentType;
  export let active: boolean = false;
</script>

<div
  class="{styles.skillItem} {active ? styles.active : ''}"
  role="presentation"
  on:click
>
  <svelte:component this={icon} class={styles.icon} />
  <p class={styles.childrenWrapper}><slot /></p>
  {#if $$slots.hint}
    <p class={styles.hint}><slot name="hint" /></p>
  {/if}
</div>
