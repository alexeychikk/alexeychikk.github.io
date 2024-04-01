<script lang="ts">
  import IconChevronLeft from 'svelte-material-icons/ChevronLeft.svelte';

  import { delayedOut } from '../../../stores';
  import Button from '../Button';

  import styles from './Drawer.module.scss';

  export let open = false;
  export let position: 'left' | 'right' = 'left';
  export let transitionDuration = 225;
  export let responsive = false;

  const visible = delayedOut(open, transitionDuration);

  $: stateClass = `${responsive ? styles.responsive : ''} ${
    open ? styles.open : ''
  } ${styles[position]}`;
  $: visible.set(open);
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
    <Button on:click={() => (open = false)}>
      <IconChevronLeft />
      Back
    </Button>
  </div>

  <div class={styles.content}>
    <slot />
  </div>
</div>
