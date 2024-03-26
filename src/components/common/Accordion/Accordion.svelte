<script lang="ts">
  import { clsx } from 'clsx';
  import { cubicOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  import styles from './Accordion.module.scss';

  export let expanded = false;
  export let disabled = false;
</script>

<div class={clsx(styles.accordion, $$restProps.class)}>
  <div
    class={styles.summary}
    role="presentation"
    on:click={() => (disabled ? null : (expanded = !expanded))}
  >
    <slot name="summary" />
  </div>

  {#if expanded}
    <div
      class={styles.details}
      transition:slide={{ duration: 300, easing: cubicOut }}
    >
      <slot name="details" />
    </div>
  {/if}
</div>
