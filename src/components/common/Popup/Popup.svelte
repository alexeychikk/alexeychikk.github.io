<script lang="ts">
  import { tweened } from 'svelte/motion';

  import styles from './Popup.module.scss';

  export let open = false;
  export let transitionDuration = 260;

  const visible = tweened(open ? 1 : 0, { duration: transitionDuration });
  $: visible.set(open ? 1 : 0);
</script>

<div class="{styles.popup} {open ? styles.open : ''} {$$restProps.class}">
  <slot name="button" />

  <div
    class={styles.overlay}
    on:click={() => (open = false)}
    role="presentation"
  />

  <div class={styles.content} style:visibility={$visible ? '' : 'hidden'}>
    <slot />
  </div>
</div>
