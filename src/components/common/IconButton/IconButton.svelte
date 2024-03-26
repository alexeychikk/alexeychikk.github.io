<script lang="ts">
  import { clsx } from 'clsx';

  import styles from './IconButton.module.scss';
</script>

<button
  {...$$restProps}
  class={clsx(styles.iconButton, $$restProps.class)}
  on:click
>
  <slot />
</button>
