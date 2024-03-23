<script lang="ts">
  import { delayedOut } from '../../../stores';

  import styles from './Popup.module.scss';

  export let open = false;
  export let transitionDuration = 260;

  const visible = delayedOut(open, transitionDuration);
  $: visible.set(open);
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
