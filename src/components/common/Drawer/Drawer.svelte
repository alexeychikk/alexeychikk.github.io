<script lang="ts">
  import { tweened } from 'svelte/motion';
  import IconChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';

  import IconButton from '../IconButton';

  import styles from './Drawer.module.scss';

  export let open = false;
  export let position: 'left' | 'right' = 'left';
  export let transitionDuration = 225;
  export let responsive = false;

  const visible = tweened(open ? 1 : 0, { duration: transitionDuration });

  $: stateClass = `${responsive ? styles.responsive : ''} ${
    open ? styles.open : ''
  } ${styles[position]}`;
  $: visible.set(open ? 1 : 0);
  $: document.body.classList.toggle(styles.open, open);
</script>

<div
  class="{styles.overlay} {stateClass}"
  role="presentation"
  style:visibility={$visible ? '' : 'hidden'}
  style:--drawer-transition-duration="{transitionDuration}ms"
  on:click={() => (open = false)}
/>

<div
  class="{styles.drawer} {stateClass}"
  style:--drawer-transition-duration="{transitionDuration}ms"
>
  <div class={styles.header}>
    <IconButton on:click={() => (open = false)}>
      <IconChevronLeft />
    </IconButton>
  </div>

  <div class={styles.content}>
    <slot />
  </div>
</div>
