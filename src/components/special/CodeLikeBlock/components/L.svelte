<script lang="ts">
  import { clsx } from 'clsx';

  import styles from '../CodeLikeBlock.module.scss';

  export let active: boolean = false;
  export let hover: boolean = false;
  export let git: 'green' | 'blue' | undefined = undefined;
</script>

<div
  class={clsx(
    styles.L,
    active && styles.active,
    hover && styles.hover,
    git && styles.git,
    git && styles[git],
    $$restProps.class,
  )}
  role="presentation"
  on:click
>
  <div class={styles.LChildren}><slot /></div>
</div>
