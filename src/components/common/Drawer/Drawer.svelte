<script lang="ts">
  import { tweened } from 'svelte/motion';
  import IconChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';

  import IconButton from '../IconButton';

  import styles from './Drawer.module.scss';

  export let open = false;
  export let position: 'left' | 'right' = 'left';
  export let transitionDuration = 225;
  export let closable = false;

  const visibility = tweened(open ? 1 : 0, { duration: transitionDuration });

  $: visibility.set(open ? 1 : 0);
  $: document.body.style.overflow = open ? 'hidden' : 'auto';
</script>

<div
  class="{styles.overlay} {open ? styles.open : ''}"
  role="presentation"
  style:visibility={$visibility ? '' : 'hidden'}
  style:--drawer-transition-duration="{transitionDuration}ms"
  on:click={() => (open = false)}
></div>
<div
  class="{styles.drawer} {open ? styles.open : ''} {styles[position]}"
  style:--drawer-transition-duration="{transitionDuration}ms"
>
  {#if closable}
    <div class={styles.header}>
      <IconButton on:click={() => (open = false)}>
        <IconChevronLeft />
      </IconButton>
    </div>
  {/if}
  <div class={styles.content}>
    <slot />
  </div>
</div>
