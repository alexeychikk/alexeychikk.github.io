<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './Button.module.scss';
</script>

<button
  {...$$restProps}
  class={clsx(styles.button, $$restProps.class)}
  on:click
>
  <slot />
</button>
